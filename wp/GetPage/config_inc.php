<?php
$config = array();
$config['hostname'] = 'rds77viayyayymf.mysql.rds.aliyuncs.com';
$config['username'] = 'yylmacro';
$config['password'] = 'NOPASS_YZrx_YYLMACROadmin512';
$config['database'] = 'yylindex';
$config['hostport'] = '3306';
$config['charset'] = 'utf8';

require_once 'DbMysqli.class.php';
$db = new DbMysqli($config);