$(function() {
  $(".js-question").on("click", function() {
    $(this).next().slideToggle(200);
    $(this).children(".qa-icon").toggleClass("open");
  });
});