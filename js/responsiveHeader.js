$(document).ready(function () {
  // Function to adjust CSS properties based on screen width
  function adjustCSSBasedOnWidth() {
    if ($(window).width() > 820) {
      // Apply CSS changes for larger screens
      $(".logo").css({
        display: "flex",
      });
      $(".hamburger").css({
        display: "none",
      });
      $("header").css({
        "justify-content": "space-between",
      });
      $("header").removeClass("header-mobile");
      $("header").removeClass("nav-mobile");
      $("nav").removeClass("inactive");
      $("nav").removeClass("nav-mobile");
    }

    if ($(window).width() <= 820 && $(window).width() >= 550) {
      // Apply CSS changes for small screens
      $(".logo").css({
        display: "none",
      });
      $("header").addClass("header-mobile");
      $("header").css({
        "justify-content": "center",
      });
      $(".hamburger").css({
        display: "none",
      });
      $("header").removeClass("nav-mobile");
      $("nav").removeClass("inactive");
      $("nav").removeClass("nav-mobile");
    }

    if ($(window).width() < 550) {
      $("header").addClass("header-mobile");
      $("header").addClass("nav-mobile");
      $("nav").addClass("inactive");
      $("nav").addClass("nav-mobile");
      $(".hamburger").css({
        display: "block",
      });
      $(".logo").css({
        display: "block",
      });
    }
  }

  // Initial call to adjust CSS properties
  adjustCSSBasedOnWidth();

  // Call adjustCSSBasedOnWidth on window resize
  $(window).resize(function () {
    adjustCSSBasedOnWidth();
  });
});
