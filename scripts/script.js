$(document).ready(function() {
  $(".thumbs-box a").click(function() {
    $(this)
      .siblings("a")
      .removeClass("active-thumbs");
    $(this).addClass("active-thumbs");
  });

  $(".surfboards__tabs1 li").click(function() {
    $(this)
      .siblings("li")
      .removeClass("active-tabs");
    $(this).addClass("active-tabs");
  });

  $(".surfboards__tabs2 li").click(function() {
    $(this)
      .siblings("li")
      .removeClass("active-tabs");
    $(this).addClass("active-tabs");
  });

  $(".surfboards__tabs3 li").click(function() {
    $(this)
      .siblings("li")
      .removeClass("active-tabs");
    $(this).addClass("active-tabs");
  });

  $("#tab-container1").easytabs({
    animate: true,
    animationSpeed: "fast"
  });

  $("#tab-container2").easytabs({
    animate: true,
    animationSpeed: "fast"
  });

  $("#tab-container3").easytabs({
    animate: true,
    animationSpeed: "fast"
  });

  let owl = $(".owl-carousel");

  owl.owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    margin: 50
  });

  $(".surfboards__controller_right").click(function() {
    owl.trigger("next.owl.carousel");
  });

  $(".surfboards__controller_left").click(function() {
    owl.trigger("prev.owl.carousel");
  });

});
