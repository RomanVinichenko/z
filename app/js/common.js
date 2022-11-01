$(document).ready(function () {
  $("select").niceSelect();
  $(".range-slider").ionRangeSlider();

  $(".dropdown").hover(
    function () {
      $(this).find(".dropdown__content").addClass("dropdown__content--active");
    },
    function () {
      $(this)
        .find(".dropdown__content")
        .removeClass("dropdown__content--active");
    }
  );

  $(".tabbar__control").on("click", function () {
    const _this = $(this);
    const tabbar = _this.closest(".tabbar");

    const controls = tabbar.find(".tabbar__control");
    const control = _this;

    const tabs = tabbar.find(".tabbar__tabs");
    const tab = tabs.find("[data-target='" + control.attr("id") + "']");

    controls.not(control).removeClass("tabbar__control--active");
    tabs.children(".tabbar__tab").not(tab).removeClass("tabbar__tab--active");

    if (control.hasClass("tabbar__control--can-close")) {
      control.toggleClass("tabbar__control--active");
      tab.toggleClass("tabbar__tab--active");
    } else {
      control.addClass("tabbar__control--active");
      tab.addClass("tabbar__tab--active");
    }
  });

  $(".table__anchor").on("click", function () {
    window.location = $(this).attr("data-src");
  });

  $(".header__hamburger").on("click", function () {
    $(".hamburger-nav").addClass("hamburger-nav--toggle");
  });

  $(".header__profile").on("click", function () {
    $(".user-nav").addClass("user-nav--toggle");
  });

  $(".user-nav__close").on("click", function () {
    $(".user-nav").removeClass("user-nav--toggle");
  });

  $(".choose-modal__close").on("click", function () {
    $(".choose-modal").removeClass("choose-modal--toggle");
  });

  $(".choose-loc").on("click", function () {
    $(".choose-modal").addClass("choose-modal--toggle");
  });

  $(".account-button").on("click", function () {
    $(".account-nav").addClass("account-nav--toggle");
  });

  $(".account-nav__close").on("click", function () {
    $(".account-nav").removeClass("account-nav--toggle");
  });

  $(".hamburger-nav__close").on("click", function () {
    $(".hamburger-nav").removeClass("hamburger-nav--toggle");
  });

  new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".account-nav__group-content").hide();
  $(".account-nav__group-name").on("click", function () {
    const _this = $(this);
    const parent = _this.parent();
    if (parent.hasClass("account-nav__group--active")) {
      parent.removeClass("account-nav__group--active");
      parent.find("div.account-nav__group-content").slideUp(300);
    } else {
      $(".account-nav__group").removeClass("account-nav__group--active");
      $(".account-nav__group-content").slideUp(300);
      parent.addClass("account-nav__group--active");
      parent.find("div.account-nav__group-content").slideDown(300);
    }
  });
});

$(document).mouseup(function (e) {
  var container = $(".account-nav__content");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".account-nav").removeClass("account-nav--toggle");
  }
});

$(document).mouseup(function (e) {
  var container = $(".hamburger-nav__content");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".hamburger-nav").removeClass("hamburger-nav--toggle");
  }
});

$(document).mouseup(function (e) {
  var container = $(".user-nav__content");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".user-nav").removeClass("user-nav--toggle");
  }
});
