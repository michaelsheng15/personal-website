$(document).ready(function() {
    $('.js--right').waypoint(function(direction) {
        $('.js--right').addClass('animated slideInRight');
    }, {
        offset: '80%'
});
    $('.js--left').waypoint(function(direction) {
        $('.js--left').addClass('animated slideInLeft');
    }, {
        offset: '80%'
});
    $('.js--left2').waypoint(function(direction) {
        $('.js--left2').addClass('animated slideInLeft');
    }, {
        offset: '80%'
});
    $('.js--left3').waypoint(function(direction) {
        $('.js--left3').addClass('animated slideInLeft');
    }, {
        offset: '100%'
});
    
/*var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $('.sticky').slideUp(200);
   } else {
      $('.sticky').slideDown(200);
   }
   lastScrollTop = st;
});
    */

});