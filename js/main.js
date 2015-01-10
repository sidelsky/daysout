//Skrollr
var windowWidth = $(window).width();

window.onload = function() {
  if(windowWidth > 1024){
  var s = skrollr.init({
          forceHeight: false,
          smoothScrolling: true,
          mobileDeceleration: 0.004,
          easing: {
              //This easing will sure drive you crazy
              wtf: Math.random,
              inverted: function(p) {
                return 1 - p;
              }
            },
            render: function(data) {
            //Log the current scroll position.
            //console.log(data.curTop);
            $('#info').text(data.curTop);
          }
        });
      } else {
        //Hide preloaded images
        //hide_images();
        }
  //  press.hide( "fast", function() {
  //   s.refresh();
  // });
 };

//Slick slider
function do_slick(){
  $('.partners').slick({
    centerMode: true,
    centerPadding: '30px',
    variableWidth: false,
    slidesToShow: 1,
    dots: false,
    arrows: false,
    infinite: true,
    respondTo: "slider",
    responsive: [
  {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 1
      }
    }
  ]
  });
}

function do_logo_slider(){
//Logos
  $('.logos').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
  {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
  });
}

$(document).ready(function(){

  //Call functions 
  do_logo_slider();

  if(windowWidth > 600){
     do_slick();
    }
 

  //do_check_window();

/*  $(window).resize(function(){
    do_check_window();
    console.log('run');
  });
*/


/*  var hover_container = $('.inner a'),
      thumb = $('.slider-image-wrapper');

  hover_container.hover(function() {
    $(this).addClass('this');
    thumb.not('.this .slider-image-wrapper').addClass('active');

  }, function() {
    $(this).removeClass('this');
    thumb.removeClass('active');

  });*/



  var hover_container = $('.inner a'),
      thumb = $('.slider-image-wrapper');

hover_container.hover(function() {
  hover_container.not(this).addClass('active');
}, function() {
  hover_container.removeClass('active');
});


	//multiselect
	$("select").multiselect({
			height: 175,
      minWidth: 'auto'
	});
	 
	$(".region select").multiselect({
	   header: "Region",
	   noneSelectedText: "Region",
	   selectedList: 1,
	});

	$(".county select").multiselect({
	   header: "County",
	   noneSelectedText: "County",
	   selectedList: 1
	});

	$(".activity select").multiselect({
	   header: "Activity",
	   noneSelectedText: "Activity",
	   selectedList: 1
	});
 
	//End
});
