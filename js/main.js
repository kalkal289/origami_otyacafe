$(function() {
  // Q&Aのスライド処理
  $(".js-question").on("click", function() {
    $(this).next().slideToggle(200);
    $(this).children(".qa-icon").toggleClass("open");
  });
  
  // メニュー選択時のスムーススクロール処理
  $('a[href^="#"]').click(function() {
    $(".header-menu-list").removeClass("is-show");

    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });

  // ハンバーバーメニュー開閉処理
  $(".toggle-menu-button").on("click", function() {
    if ($(".header-menu-list").hasClass("is-show")) {
      $(".header-menu-list").removeClass("is-show");
    } else {
      $(".header-menu-list").addClass("is-show");
    }
  });

  // トップダウンメニュー折りたたみ処理
  $(".header-menu-list").click(function() {
    $(".header-menu-list").removeClass("is-show");
  });
});
