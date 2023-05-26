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
      updateCardProduct();
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

  function updateCardProduct() {
    $(".category-page-row .shop-container .product").each(function() {
      $(this).find(".price-wrapper").insertBefore($(this).find(".title-wrapper"));
    });
  }

  // -----------------Store------------------
  
  $(document).ready(function () {
    updateStoreMenuOption();
  });

  function updateStoreMenuOption() {
    $(".shop-page-title").prepend("<div id='store-menu-options'></div>");

    $(".shop-page-title .is-medium").clone().addClass("screen-small").appendTo(".shop-page-title #store-menu-options");

    $(".shop-page-title .filter-button").html("<img class='lazy-load-active' style='width: 25px; height: 25px;' src='https://holycos.xyz/wp-content/plugins/hc_custom_template/public/imgs/filter.svg' data-src='https://holycos.xyz/wp-content/plugins/hc_custom_template/public/imgs/filter.svg'><div><strong>Filtrar</strong></div>");
  }

  // -----------------Store------------------

  var firstLoadSearchBar = true;

  $(document).ready(function() {
    $(".dgwt-wcas-search-wrapp").click(function() {
      if(firstLoadSearchBar) {
        addIconToSearchBar();
        firstLoadSearchBar = false;
      }
    });
  });

  function addIconToSearchBar() {
    $("#dgwt-wcas-search-input-3").after("<div class='image-filter-search-bar'><img style='width: 15px; height: 100%;' src='https://holycos.xyz/wp-content/plugins/hc_custom_template/public/imgs/magnifyingGlass.svg' data-src='https://holycos.xyz/wp-content/plugins/hc_custom_template/public/imgs/magnifyingGlass.svg'></div>");
  }
})(jQuery);
