//globals
var _myHeadOnHeroWidth = $('#myHead').width();
var _myHeadOnHeroHeight = $('#myHead').height();
var _myHeadBorderWidth = 14 /*static*/
var _onHero = true;

$("#myHead").css('left', ($(window).width() / 2) - ($('#myHead').width()/2) - _myHeadBorderWidth);
$("#myHead").css('top', ($(window).height() / 2) - $('#myHead').height() - _myHeadBorderWidth);

$( document ).ready(function() {
    $('.navbar-brand').click(function(){
        $.fn.fullpage.moveTo(1);
    });
   $('#arrowHero').click(function(){
        $.fn.fullpage.moveTo(2);
    }); 
   $('#navMotivatie').click(function(){
        $.fn.fullpage.moveTo(2);
    });
   $('#navErvaring').click(function(){
        $.fn.fullpage.moveTo(3);
    });
   $('#navReferenties').click(function(){
        $.fn.fullpage.moveTo(4);
    });
   $('#navContact').click(function(){
        $.fn.fullpage.moveTo(5);
    });
});

$(document).ready(function() {
    $('#fullpage').fullpage({
    	verticalCentered: false,
        resize:false,
        scrollOverflow: true,
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        paddingTop:'52px',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        onLeave: function(index, nextIndex, direction){
            //after going to hero
            if(nextIndex == 1){
                positionMyHeadToHero();
                $('.fa-rocket').removeClass('active-nav-icon');
                $('.fa-graduation-cap').removeClass('active-nav-icon');
                $('.fa-quote-left').removeClass('active-nav-icon');
                $('.fa-envelope').removeClass('active-nav-icon');
                _onHero = true;
            }
            else if(nextIndex == 2){
                positionMyHeadToHeader();
                $('.fa-rocket').addClass('active-nav-icon');
                $('.fa-graduation-cap').removeClass('active-nav-icon');
                $('.fa-quote-left').removeClass('active-nav-icon');
                $('.fa-envelope').removeClass('active-nav-icon');
                _onHero = false;
            }
            else if(nextIndex == 3){
                positionMyHeadToHeader();
                $('.fa-graduation-cap').addClass('active-nav-icon');
                $('.fa-rocket').removeClass('active-nav-icon');
                $('.fa-quote-left').removeClass('active-nav-icon');
                $('.fa-envelope').removeClass('active-nav-icon');
                _onHero = false;
            }
            else if(nextIndex == 4){
                positionMyHeadToHeader();
                $('.fa-quote-left').addClass('active-nav-icon');
                $('.fa-rocket').removeClass('active-nav-icon');
                $('.fa-graduation-cap').removeClass('active-nav-icon');
                $('.fa-envelope').removeClass('active-nav-icon');
                _onHero = false;
            }
            else if(nextIndex == 5){
                positionMyHeadToHeader();
                $('.fa-envelope').addClass('active-nav-icon');
                $('.fa-rocket').removeClass('active-nav-icon');
                $('.fa-graduation-cap').removeClass('active-nav-icon');
                $('.fa-quote-left').removeClass('active-nav-icon');
                _onHero = false;
            }
            if(index == 4){
                clearTimeout(slideTimeout);
            }
        },
        afterLoad: function(anchorLink, index){
            //using index
            if(index == '4'){
                $.fn.fullpage.moveTo(4, 0);
                slideTimeout = setTimeout(function(){
                    $.fn.fullpage.moveSlideRight();
                }, 5000);
            }
        },
        onSlideLeave: function( anchorLink, index, slideIndex, direction){
            if (typeof slideTimeout !== 'undefined'){
                clearTimeout(slideTimeout);
            }
            slideTimeout = setTimeout(function(){
                $.fn.fullpage.moveSlideRight();
            }, 5000);
        }
    });
});

function positionMyHeadToHero(){
	var myHeadLeftPos = ($(window).width() / 2) - (_myHeadOnHeroWidth/2) - _myHeadBorderWidth;
	var myHeadTopPos = ($(window).height() / 2) - _myHeadOnHeroHeight  - _myHeadBorderWidth;
	$( "#myHead" ).animate({
		width: _myHeadOnHeroWidth + "px",
		left: myHeadLeftPos + "px",
		top: myHeadTopPos + "px"
	},700,"easeInQuart");
}

function positionMyHeadToHeader(){
	var myHeadLeftPos = ($(window).width() / 2) - 50;
	var myHeadTopPos = 5;
	$( "#myHead" ).animate({
		width: "100px",
		left: myHeadLeftPos + "px",
		top: myHeadTopPos + "px"
	},700,"easeInQuart");
}

