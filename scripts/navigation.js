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
                $('.fa-rocket').removeClass('fav-header-active');
                $('.fa-graduation-cap').removeClass('fav-header-active');
                $('.fa-quote-left').removeClass('fav-header-active');
                $('.fa-envelope').removeClass('fav-header-active');
                _onHero = true;
            }
            else if(nextIndex == 2){
                positionMyHeadToHeader();
                $('.fa-rocket').addClass('fav-header-active');
                $('.fa-graduation-cap').removeClass('fav-header-active');
                $('.fa-quote-left').removeClass('fav-header-active');
                $('.fa-envelope').removeClass('fav-header-active');
                _onHero = false;
            }
            else if(nextIndex == 3){
                positionMyHeadToHeader();
                $('.fa-graduation-cap').addClass('fav-header-active');
                $('.fa-rocket').removeClass('fav-header-active');
                $('.fa-quote-left').removeClass('fav-header-active');
                $('.fa-envelope').removeClass('fav-header-active');
                _onHero = false;
            }
            else if(nextIndex == 4){
                positionMyHeadToHeader();
                $('.fa-quote-left').addClass('fav-header-active');
                $('.fa-rocket').removeClass('fav-header-active');
                $('.fa-graduation-cap').removeClass('fav-header-active');
                $('.fa-envelope').removeClass('fav-header-active');
                _onHero = false;
            }
            else if(nextIndex == 5){
                positionMyHeadToHeader();
                $('.fa-envelope').addClass('fav-header-active');
                $('.fa-rocket').removeClass('fav-header-active');
                $('.fa-graduation-cap').removeClass('fav-header-active');
                $('.fa-quote-left').removeClass('fav-header-active');
                _onHero = false;
            }
            if(index == 4){
                clearTimeout(slideTimeout);
            }
        },
        afterLoad: function(anchorLink, index){
            //using index
            if(index == 4){
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

$( document ).ready(function() {
    $('.navbar-brand').click(function(){
        $.fn.fullpage.moveTo(1);
    });
    $('#myHead').click(function(){
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

function positionMyHeadToHero(){
	$( "#myHead" ).animate({
		width: "180px",
		left: ($(window).width() / 2) + "px", /*left:50%;*/
        marginLeft: "-90px",
		top: ($(window).height() / 5) + "px" /*top:20%;*/
	},700,"easeInQuart");
    setTimeout(function(){
        $("#myHead").css({
            left: "50%",
            top: "20%",
            zIndex: "0",
            cursor: "auto"
        }); 
    },750);
}

function positionMyHeadToHeader(){
     $("#myHead").css({zIndex: "1031"}); /*above navbar*/
	$( "#myHead" ).animate({
		width: "100px",
		left: ($(window).width() / 2) + "px", /*left:50%;*/
        marginLeft: "-50px",
		top: "5px"
	},700,"easeInQuart");
    setTimeout(function(){
        $("#myHead").css({
            left: "50%",
            cursor: "pointer"
        }); 
    },750);  
}

