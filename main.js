$(document).ready(function () {
  $(".parent-color").click(function (e) {
    if ($(e.target).is("button")) {
      var clickedButton = $(e.target);
      var newColorClass = clickedButton.attr("class");
      var colorName = newColorClass.split("-")[0];
      $("h3").css("color", colorName);
      $(".icon-hover").css("background-color", colorName);
    }
  });
});
$(function () {
  (function rotateImage() {
    $(".parent-color img").animate(
      {
        rotate: "0deg",
      },
      1000,
      function () {
        $(this).animate(
          {
            rotate: "360deg",
          },
          1000,
          function () {
            rotateImage();
          }
        );
      }
    );
  })();
});
