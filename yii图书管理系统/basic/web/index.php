<?php

// comment out the following two lines when deployed to production
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'dev');

//注册 Composer 自动加载器
require __DIR__ . '/../vendor/autoload.php';
//包含Yii类文件
require __DIR__ . '/../vendor/yiisoft/yii2/Yii.php';

//加载应用配置
$config = require __DIR__ . '/../config/web.php';

//创建、配置、运行一个引用
(new yii\web\Application($config))->run();
