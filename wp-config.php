<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'nexles');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'pestcontrol.local');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '.QXx*86P>xB($11(IG*~TS{Rpw|&X/fskbP1o~J[ZRAPb*1Ik-J5u}y,Ex^j7m1l');
define('SECURE_AUTH_KEY',  'QYt=@0Yj <|QV+,bjrA7sNK.FuI.S[8-oB07p|UcoUK(5DciHYUkwECm8C{3vyh5');
define('LOGGED_IN_KEY',    'j~`J3O`t2D,b!F!<w?Yt(3nd*RH.,cUx59XI(MKX]~GF80<LuR>)&a5iMj3P38+/');
define('NONCE_KEY',        '2f>K zl5Vg>1gVO3-9- IKLUtJ4IBYr5,76nVazBS#$PQ}J&+m}o:|Vb8p>*%3l>');
define('AUTH_SALT',        'B&_%-}Fp|9W5{7fggB99}HcV[`v~Y?X<*y|M9WM>;qqpyiH|~GysgTUt@[/(Dq0J');
define('SECURE_AUTH_SALT', ',|C]RO|a[<QM&d`;Mkec@{,]jmwLwTY=3C6j<tbd`X-uX*rWH>aF.Ex#sb-{dBVe');
define('LOGGED_IN_SALT',   'ohCVV5r(&4!SE-~k}5us3#htp-o[<@fKqPsnd063M+K.s-rrvfiUJRYx+g0 3@_ ');
define('NONCE_SALT',       'm{RgIfUe*8>=d IuphVa.Ex7W,9H1BU-fM-;;85d~q5#D#Gu|+vm-3<d-rt0}=&@');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
