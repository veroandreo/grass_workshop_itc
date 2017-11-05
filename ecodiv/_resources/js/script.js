/* -----------------------------------------------------------------------------
Show / hide menu
----------------------------------------------------------------------------- */

$(function(){
        $('.toggler').click(function(){
                $('#list').fadeToggle("fast");
            });
        });

/* -----------------------------------------------------------------------------
Sticky header
----------------------------------------------------------------------------- */

$(function() {

    // grab the initial top offset of the navigation
    var sticky_navigation_offset_top = $('#taskbar').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function(){
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > sticky_navigation_offset_top) {
            $('#sticky_taskbar').css({ 'position': 'fixed', 'top':0, 'left':0 });
        } else {
            $('#sticky_taskbar').css({ 'position': 'relative' });
        }
    };

    // run our function on load
    sticky_navigation();

    // and run it again every time you scroll
    $(window).scroll(function() {
         sticky_navigation();
    });

});

/* -----------------------------------------------------------------------------
Functions for scroll botton to go back to top
----------------------------------------------------------------------------- */

$(function(){

	$(document).on( 'scroll', function(){

		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
});

$(function(){

	$(document).on( 'scroll', function(){

		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});

	$('.scroll-top-wrapper').on('click', scrollToTop);
});

function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

/* -----------------------------------------------------------------------------
Show / hide div
From: http://jsfiddle.net/UpuDU/6/
----------------------------------------------------------------------------- */

$(document).ready(function() {

	var tab = $('.faq-row-handle > a'),
		tabContent = $('.faq-row-content'),
		tabParent = $('.faq-row');
		if(tab.length){
			tab.off('click').on('click', function(){
				var ele = $(this),
					currContent = $('#'+ele.attr('rel'));
					if(!ele.hasClass('open')){
						tabParent.stop(true, true).animate({
							height:'0px'
						},function() {
							tabContent.removeClass('open');
							currContent.addClass('open');
							tab.removeClass('open');
							ele.addClass('open');

							tabParent.stop(true, true).animate({
								height:currContent.height()+'px'
							});
						});
					}
			});
			$('.faq-row-handle > a:eq(0)').click();
	}
});

/* -----------------------------------------------------------------------------
Show / hide div
From: http://jsfiddle.net/UpuDU/
----------------------------------------------------------------------------- */

$(document).ready(function() {

	var faqTab = $('.faq2-row-handle'),
        faqTabContainer = $('.faq2-row-container');
	if(faqTab.length){
		faqTab.off('click').on('click', function(){
			var faqRow = $(this).parent(),
			    faqContent = $(this).parent().find('.faq2-row-content');

			    faqTabContainer.find('.faq2-row-content').not(faqContent).stop().slideUp('slow');
                faqTabContainer.find('.faq2-row').not(faqRow).removeClass('open');

			    faqContent.stop().slideToggle('slow', function() {
					faqRow.toggleClass('open', faqContent.is(':visible'));
				});
		});
	}
});


/* -----------------------------------------------------------------------------
Hide / shows div
http://www.randomsnippets.com/2011/04/10/how-to-hide-show-or-toggle-your-div-with-jquery/
----------------------------------------------------------------------------- */
function toggleDiv(divId) {
   $("#"+divId).toggle();
}

function showonlyone(thechosenone) {
     $('.newboxes').each(function(index) {
          if ($(this).attr("id") == thechosenone) {
               $(this).show(200);
          }
          else {
               $(this).hide(600);
          }
     });
}
