<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;

require __DIR__ . '/../vendor/autoload.php';

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

$app->get('/api/hello/{name}', function (Request $request, Response $response, $args) {
    $array = [];
    $array["nom"] = $args['name'];
    $response->getBody()->write(json_encode($array));
    return $response;
});

$app->get('/api/login', function (Request $request, Response $response, $args) {
    $token_jwt = JWT::encode(getPayload(), JWT_SECRET, "HS256");

    $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");

    return $response;
});

$app->get('/api/user', function (Request $request, Response $response, $args) {
    $data = array('nom' => 'toto', 'prenom' => 'titi', 'adresse' => '6 rue des fleurs', 'tel' => '0606060607');
    $response->getBody()->write(json_encode($data));

    return $response;
});

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

$app->add(new Tuupola\Middleware\JwtAuthentication($options));
$app->run();
