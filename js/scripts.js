$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $("button#switch").click(function() {
    $("body").toggleClass("dark-background");
  });
  $(".lecture").click(function() {
    $(".lecture").toggleClass("border-highlight");
  });
});
