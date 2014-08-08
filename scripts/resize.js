$( window ).resize(function() {
    if($(window).width()>1200){
        _myHeadOnHeroWidth = 200;
        _myHeadOnHeroHeight = 200;
    }
    else if($(window).width()>992){
        _myHeadOnHeroWidth = 170;
        _myHeadOnHeroHeight = 170;
    }
    else if($(window).width()>768){
        _myHeadOnHeroWidth = 150;
        _myHeadOnHeroHeight = 150;
    }
    else{
        _myHeadOnHeroWidth = 120;
        _myHeadOnHeroHeight = 120;
    }
    if(_onHero){
        var myHeadLeftPos = ($(window).width() / 2) - (_myHeadOnHeroWidth / 2);
        var myHeadTopPos = ($(window).height() / 2) - _myHeadOnHeroHeight;
        $("#myHead").css('width', _myHeadOnHeroWidth);
        $("#myHead").css('left', myHeadLeftPos);
        $("#myHead").css('top', myHeadTopPos);
    }
    else{
        var myHeadLeftPos = ($(window).width() / 2) - 50;
        $("#myHead").css('left', myHeadLeftPos);
    }
});






