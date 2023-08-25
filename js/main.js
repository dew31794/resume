// 手機版
// $(document).ready(function () {
//   $('.menu-icon').on('click', function () {
//     $('.menu-icon').toggleClass('open');
//   });
// });


function init() {
  window.addEventListener('scroll', function (e) {
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 1;
      if (distanceY > shrinkOn) {
          $("header").addClass("smaller");
      } else {
          if ($("header").hasClass("smaller")) {
            $("header").removeClass("smaller");
          }
      }
  });
}

$(window).on('resize load', function(event) {
  console.log($(this).width());
  if( $(this).width() < 767) {
    window.onload = init();
  }
});


// Scroll to Top
// jQuery.noConflict();
$(function($) {
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
			$('#return-to-top').fadeIn(200); // Fade in the arrow
		} else {
			$('#return-to-top').fadeOut(200); // Else fade out the arrow
		}
	});
	$('#return-to-top').click(function() { // When arrow is clicked
		$('body,html').animate({
			scrollTop: 0 // Scroll to top of body
		}, 500);
	});
});

// $(function() {
//   $(window).scroll(function() {
//       if ($(this).scrollTop() > 240) {
//         $("#gotop").fadeIn();
//       } else {
//         $("#gotop").fadeOut();
//       }
//   }).scroll();

//   $("#gotop").click(function(e) {
//       e.preventDefault();
//       $('body, html').animate({
//           scrollTop: 0
//       }, 500);
//   });
// });