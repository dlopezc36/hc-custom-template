(function ($) {
  "use strict";

  // ----------------Checkout------------------

  var firstLoad = true;

  $(document).ready(function () {
    $(document).ajaxStop(function () {
      if (firstLoad) {
        updateCheckoutAccountLogin();
        updateCheckoutCoupon();
        updateCheckoutFreeShippingBar();

        $(".woocommerce-checkout #checkout-load-curtain").hide();

        firstLoad = false;
      }
    });
  });

  function updateCheckoutFreeShippingBar() {
    $(".checkout-sidebar .woocommerce-shipping-totals").before("<tr id='free-shipping-container-row'><td colspan='2'><div id='free-shipping-container'></div></td></tr>");

    $("#free-shipping-container").append($(".devnet_fsl-free-shipping"));
  }

  function updateCheckoutCoupon() {
    $(".checkout-sidebar .cart-subtotal").after("<tr id='free-shipping-container-row'><td colspan='2'><div id='checkout-coupon'></div></td></tr>");

    $(".checkout-sidebar #checkout-coupon").append($(".checkout_coupon"));

    $(".woocommerce-form-coupon-toggle").remove();
    $(".widget-title").remove();
  }

  function updateCheckoutAccountLogin() {
    $("#main .woocommerce-billing-fields").before("<div id='checkout-login-container'></div>");

    $("#checkout-login-container").append($(".woocommerce-form-login"));

    $("#checkout-login-container #username").prop("placeholder", "Nombre de usuario *");
    $("#checkout-login-container #password").prop("placeholder", "Contraseña *");

    $("#checkout-login-container .woocommerce-form-login p").first().html("<strong>¿Tienes usuario y contraseña? Inicia sesión.</strong>");
    $("#checkout-login-container .woocommerce-form-login__submit").insertAfter("#checkout-login-container .form-row-last");
    $("#checkout-login-container .lost_password").prev().addClass("rememberme");

    $(".woocommerce-form-login-toggle").remove();
  }

  // ----------------Product------------------

  $(document).ready(function () {
    $(".product-container").before("<div id='product-description-container'></div>");

    $("#product-description-container").append($(".product-info .jdgm-widget"));
    $("#product-description-container").append($(".product-info .product-title"));
    $("#product-description-container").append($(".product-info .product-page-price"));

    $(".product-info .product-short-description").before($(".product-info .variations_form"));

    $(".shop-container #product-load-curtain").hide();
  });

  // -----------------Cart-------------------
  $(document).ready(function () {

    $(document).ajaxStop(function () {
      updateCartCupon();
      updateCheckoutLoadingBar();
    });

  });

  function updateCartCupon() {

    $(".cart-container .cart-subtotal").after("<tr id='coupon-container-row'><td colspan='2'><div id='checkout-coupon'></div></td></tr>");

    $(".cart-container .checkout_coupon").clone().addClass("form-coupon-visible").appendTo(".cart-container #checkout-coupon");

    $(".cart-container .coupon .wp-element-button").removeClass("is-form");

    $(".cart-container .woocommerce-form-coupon-toggle").remove();
    $(".cart-container .widget-title").remove();
  }

  function updateCheckoutLoadingBar() {
    $(".cart-container .woocommerce-shipping-totals").before("<tr id='loading-bar-container-row'><td colspan='2'><div id='checkout-loading-bar'></div></td></tr>");

    $("#checkout-loading-bar").append($(".cart-container .devnet_fsl-free-shipping"));
  }
})(jQuery);
