$(document).ready(function () {
  // fullpage toggle
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
  });
    $('.sec1-content-left').fadeIn(1000);

  setTimeout(function(){
    $("#fourGrit").fadeIn();
    $("#fourGrit").css('color', '#2ad2c9')

  },1000)
});
