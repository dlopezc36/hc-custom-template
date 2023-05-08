(function ($) {
  "use strict";

  $(document).ready(function () {
    $(document).ajaxStop(function () {
      updateCheckoutAccountLogin();
      updateCheckoutCoupon();
      updateCheckoutFreeShippingBar();
    });
  });

  function updateCheckoutFreeShippingBar() {
    $(".checkout-sidebar .woocommerce-shipping-totals").before("<tr><td colspan='2'><div id='free-shipping-container'></div></td></tr>");
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

    $("#checkout-login-container .woocommerce-form-login p").first().html("<strong>¿Tienes usuario y contraseña? Inicia sesión</strong>");
    $("#checkout-login-container .woocommerce-form-login__submit").insertAfter("#checkout-login-container .form-row-last");
    $("#checkout-login-container .lost_password").prev().addClass("rememberme");

    $(".woocommerce-form-login-toggle").remove();
  }
})(jQuery);
