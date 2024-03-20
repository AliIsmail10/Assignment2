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
