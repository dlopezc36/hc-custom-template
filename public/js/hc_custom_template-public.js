(function ($) {
  "use strict";

  var firstLoad = true;

  $(document).ready(function () {
    $(".woocommerce-checkout").append("<div id='checkout-load-curtain'><div><div class='hc-custom-loader'></div><strong>Cargando...</strong></div></div>");

    $(document).ajaxStop(function () {
      if (firstLoad) {
        updateCheckoutAccountLogin();
        updateCheckoutCoupon();
        updateCheckoutFreeShippingBar();

        $(".woocommerce-checkout #checkout-load-curtain").remove();

        firstLoad = false;
      }
    });
  });

  function updateCheckoutFreeShippingBar() {
    $(".checkout-sidebar .woocommerce-shipping-totals").before("<tr id='free-shipping-container-row'><td colspan='2'><div id='free-shipping-container'></div></td></tr>");

    $("#free-shipping-container").append($(".devnet_fsl-free-shipping"));
  }

  function updateCheckoutCoupon() {
    $("#order_review").before("<div id='checkout-coupon'></div>");

    $("#checkout-coupon").append($(".checkout_coupon"));

    $(".woocommerce-form-coupon-toggle").remove();
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
})(jQuery);
