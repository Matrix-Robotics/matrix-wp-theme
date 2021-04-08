<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb66042b24175ea7250f72a571509119e
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
        'A' => 
        array (
            'Automattic\\WooCommerce\\Blocks\\' => 30,
            'Automattic\\Jetpack\\Autoloader\\' => 30,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
        'Automattic\\WooCommerce\\Blocks\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Automattic\\Jetpack\\Autoloader\\' => 
        array (
            0 => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src',
        ),
    );

    public static $classMap = array (
        'Automattic\\Jetpack\\Autoloader\\AutoloadGenerator' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/AutoloadGenerator.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitb66042b24175ea7250f72a571509119e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitb66042b24175ea7250f72a571509119e::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitb66042b24175ea7250f72a571509119e::$classMap;

        }, null, ClassLoader::class);
    }
}
