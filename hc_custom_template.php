<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://https://www.holycosmetics.com.co/
 * @since             1.0.0
 * @package           Hc_custom_template
 *
 * @wordpress-plugin
 * Plugin Name:       HC Custom Template
 * Plugin URI:        https://https://www.holycosmetics.com.co/
 * Description:       Este plugin permite modifica la plantilla actual, agregándole funcionalidades extra a la medida.
 * Version:           1.0.0
 * Author:            Daniel López
 * Author URI:        https://https://www.holycosmetics.com.co/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       hc_custom_template
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'HC_CUSTOM_TEMPLATE_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-hc_custom_template-activator.php
 */
function activate_hc_custom_template() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-hc_custom_template-activator.php';
	Hc_custom_template_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-hc_custom_template-deactivator.php
 */
function deactivate_hc_custom_template() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-hc_custom_template-deactivator.php';
	Hc_custom_template_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_hc_custom_template' );
register_deactivation_hook( __FILE__, 'deactivate_hc_custom_template' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-hc_custom_template.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_hc_custom_template() {

	$plugin = new Hc_custom_template();
	$plugin->run();

}
run_hc_custom_template();
