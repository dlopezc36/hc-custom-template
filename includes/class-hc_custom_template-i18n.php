<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://https://www.holycosmetics.com.co/
 * @since      1.0.0
 *
 * @package    Hc_custom_template
 * @subpackage Hc_custom_template/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Hc_custom_template
 * @subpackage Hc_custom_template/includes
 * @author     Daniel López <dlopezc36@gmail.com>
 */
class Hc_custom_template_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'hc_custom_template',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
