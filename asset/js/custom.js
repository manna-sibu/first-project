// Hambarger_start

$(document).ready(function () {
  $(".hammer").click(function () {
    $(".nav__links").toggleClass("mobele-menu");
  });
});

// Hambarger_end


$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});


$(document).ready(function(){
  $('.accordion-list > li > .answer').hide();
    
  $('.accordion-list > li').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
  
});




$(document).ready(function () {
  $('.ann_slide').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      arrows: true,
      dots: false,
      centerMode: true,
      centerPadding: '10%', // Default padding for larger screens
      responsive: [
          {
              breakpoint: 1024, // Adjust padding for screens 1024px and smaller
              settings: {
                  centerPadding: '5%' // Decrease padding slightly
              }
          },
          {
              breakpoint: 768,  // Adjust padding for screens 768px and smaller
              settings: {
                  centerPadding: '10%' // Decrease padding for smaller screens
              }
          },
          {
              breakpoint: 480,  // Adjust padding for screens 480px and smaller
              settings: {
                  centerPadding: '10%'  // Minimal padding on very small screens
              }
          }
      ]
  });
});