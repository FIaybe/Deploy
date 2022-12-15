<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;

require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../bootstrap.php';

const JWT_SECRET = "makey1234567";

$app = AppFactory::create();

function getPayload()
{
    $issuedAt = time();
    $expirationTime = $issuedAt + 600;
    $userid = 1;
    $email = "test@admin.com";
    $pseudo = "XX_Shadow_XX";
    return array(
        'userid' => $userid,
        'email' => $email,
        'pseudo' => $pseudo,
        'iat' => $issuedAt,
        'exp' => $expirationTime
    );
}

$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,
    "path" => ["/api"],
    "ignore" => ["/api/hello", "/api/login"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
        $response = $response->withStatus(401);
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
];

$app->get('/api/hello/{name}', function (Request $request, Response $response, $args) {
    $array = [];
    $array["nom"] = $args['name'];
    $response->getBody()->write(json_encode($array));
    return $response;
});

$app->post('/api/login', function (Request $request, Response $response, $args) {
    global $entityManager;
    $inputJSON = file_get_contents('php://input');
    $body = json_decode( $inputJSON, TRUE ); //convert JSON into array 
    $token_jwt = JWT::encode(getPayload(), JWT_SECRET, "HS256");

    $user = $entityManager->getRepository('"public".Client')->findOneBy(array('login' => $body['login'], 'password' => $body['password']));
	
	if(!isset($body['login']) || !isset($body['password']) ){
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'You must provide a login and a password');
        $response = $response->withStatus(401);
        $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
	}	
    else if(!($utilisateur and $login == $utilisateur->getLogin() and $pass == $utilisateur->getPassword())){
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'wrong login and password');
        $response = $response->withStatus(401);
        $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
	else{
        $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
    }
	
    return $response;
});

$app->get('/api/user', function (Request $request, Response $response, $args) {
    $data = array('nom' => 'toto', 'prenom' => 'titi', 'adresse' => '6 rue des fleurs', 'tel' => '0606060607');
    $response->getBody()->write(json_encode($data));

    return $response;
});

#region products

//get all product from ./mock/products.json
$app->get('/api/product', function (Request $request, Response $response, $args) {
    $products = $entityManager->getRepository('Product')->findAll();
    $response->getBody()->write($products);
    return $response;
});

//get product by id from ./mock/products.json
$app->get('/api/product/{id}', function (Request $request, Response $response, $args) {
    $json = file_get_contents("./mock/products.json");
    $array = json_decode($json, true);
    $id = $args ['id'];
    $array = $array[$id];
    $response->getBody()->write(json_encode ($array));
    return $response;
});

//get product by term from ./mock/products.json
$app->get('/api/product/term/{term}', function (Request $request, Response $response, $args) {
    $json = file_get_contents("./mock/products.json");
    $array = json_decode($json, true);
    $id = $args ['term'];
    $newArray = [];
    foreach ($array as $key => $value) {
        if (strpos($value['name'], $id) !== false || strpos($value['description'], $id) !== false) {
            $newArray[] = $value;
        }
    }
    $response->getBody()->write(json_encode ($array));
    return $response;
});

#endregion

$app->add(new Tuupola\Middleware\JwtAuthentication($options));
$app->add(new Tuupola\Middleware\CorsMiddleware([
    "origin" => ["*"],
    "methods" => ["GET", "POST", "PUT", "PATCH", "DELETE"],
    "headers.allow" => ["Authorization", "Content-Type"],
    "headers.expose" => ["Authorization"],
]));
$app->run();
