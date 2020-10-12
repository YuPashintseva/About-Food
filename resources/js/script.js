$(document).ready(function() {
    
    /*FOR STICKY NAVIGATION*/

    $('.js--section-features').waypoint(function(direction){
                
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
             $('nav').removeClass('sticky');
                }
        }, {
                offset:'25%'
        });
    
    /*SCROLL AFTER CLICKING BUTTONS*/
    
    
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    
    
    /*NAVIGATION SCROLL*/
    
    $(".food_delivery").click(function() {
        $('html, body').animate({
            scrollTop: $(".js--section-features").offset().top
        }, 1000);
    });
    
    $(".how_it_works").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-steps").offset().top
        }, 1000);
    });    
    
    $(".our_cities").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-cities").offset().top
        }, 1000);
    });
    
    $(".our_cities").click(function() {
        $('html, body').animate({
            scrollTop: $(".js--section-plans").offset().top
        }, 1000);
    });
    
});

/*WAYPOINT FOR ANUMATION*/

$('.js--wp-1').waypoint(function(direction){
    //alert('here');
    $('.js--wp-1').addClass('animated animate__fadeIn');
},{
    offset: '50%'
});


$('.js--wp-2').waypoint(function(direction){
    //alert('here');
    $('.js--wp-2').addClass('animated animate__fadeInUp');
},{
    offset: '50%'
});

$('.js--wp-3').waypoint(function(direction){
    //alert('here');
    $('.js--wp-3').addClass('animated animate__fadeIn');
},{
    offset: '50%'
});

$('.js--wp-4').waypoint(function(direction){
    //alert('here');
    $('.js--wp-4').addClass('animated animate__pulse');
},{
    offset: '50%'
});

/*MOBILE NAVIGATION*/

$('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    
    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
        
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }
    
})
