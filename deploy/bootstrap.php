<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'host' => 'host',
'driver' => 'pdo_pgsql',
'user' => 'met02',
'password' => 'ic28JHuK79T512h5vXeYwpHABQ4w7Ce0',
'dbname' => 'met02',
'port' => '5432'
);
$entityManager = EntityManager::create($conn, $config);
