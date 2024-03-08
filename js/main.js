// Q&Aのスライド処理
$(function() {
  $(".js-question").on("click", function() {
    $(this).next().slideToggle(200);
    $(this).children(".qa-icon").toggleClass("open");
  });
});

// メニュー選択時のスムーススクロール処理
$(function() {
  $('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });
});
