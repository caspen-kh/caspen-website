$(document).ready(function () {
  tabItemToggle();
  // numberCounter();

  let counterAnimated = false;

  window.addEventListener("scroll", () => {
    const anchor = document.getElementById("aos_anchor_figure");
    const rect = anchor.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0 &&
      !counterAnimated
    ) {
      numberCounter();
      counterAnimated = true;
    }
  });

  $(window).on("load", function () {
    $("#loader-wrapper").fadeOut(700);
  });

  window.onload = function () {
    setTimeout(function () {
      document.getElementById("fadein").remove();
      AOS.init();
    }, 1000);
  };

  $("#i-accept").on("click", function () {
    if (localStorage.hidecookiebar !== "1") {
      $("#cookie-notice").hide();
      localStorage.hidecookiebar = "1";
    }
  });
  if (localStorage.hidecookiebar == "1") {
    $("#cookie-notice").hide();
  }
});

const tabItemToggle = () => {
  // Set the default active tab
  $(".tab-item:first").addClass("active");

  // Show the corresponding product showcase for the active tab
  $(".product-showcase:first").removeClass("d-none");

  // Toggle the active class on click
  $(".tab-item").click(function () {
    // Remove the active class from all tab items
    $(".tab-item").removeClass("active");
    // Add the active class to the clicked tab item
    $(this).addClass("active");

    // Hide all product showcases
    $(".product-showcase").addClass("d-none");
    // Show the corresponding product showcase for the clicked tab item
    var target = $(this).attr("tabtarget");
    $(target).removeClass("d-none");

    // Prevent default link behavior
    return false;
  });
};

const numberCounter = () => {
  // Number counter
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 3000,
          easing: "swing",
          step: function (now) {
            now = Number(Math.ceil(now)).toLocaleString("en");
            $(this).text(now);
          },
        }
      );
  });
};
