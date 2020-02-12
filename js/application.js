/*toggle*/

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
  
/*fullpage*/
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['_top', '_intro', '_exhibit','_position','_fb_qr','_teacher1','_teacher2','_program','_program1','_program2','_program3','_program4','_program5','_program6','_end'],
		menu: '#menu',
		loopTop: true,
		loopBottom: true
	});
});

$(document).ready(function(){
	$("#overlay-menu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});


/*--------------------------------------------------------------*/
/*application*/
$(function() {
 $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
        return false;
      }
    }
  });

$('.tooltip-side-nav').tooltip();
  
});

function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

/*fancybox*/
$('.fancybox').fancybox();

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
});