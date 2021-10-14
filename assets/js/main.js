jQuery(document).ready(function ($) {

$(".toggle").click(function () {
  $(".header-menu").slideToggle("slow", function () {
    $(".toggle").hide();
    $(".cross").show();
  });
});

$(".cross").click(function () {
  $(".header-menu").slideToggle("slow", function () {
    $(".cross").hide();
    $(".toggle").show();
  });
});

$(window).on("resize", function (e) {
  checkScreenSize();
});

checkScreenSize();

function checkScreenSize() {
  var newWindowWidth = $(window).width();
  if (newWindowWidth < 992) {
    $(".cross").hide();
    $(".header-menu").hide();
    $(".toggle").show();
  } else {
    $(".header-menu").show();
    $(".cross").hide();
    $(".toggle").hide();
  }
}


// var split = new Date().toString().split(" ");
// var timeZoneFormatted = split[split.length - 5] ;

function get_time_zone_offset( ) {
  var current_date = new Date();
  return parseInt(-current_date.getTimezoneOffset() / 60);
}

$('.utc').text("GMT " + get_time_zone_offset());

});