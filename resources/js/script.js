//$('body').css('display','none');
$(document).ready(function() {
    $('html').fadeIn(3000);

// Navigation scroll 
    $(function() {
     var offset = -50;    
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top + offset
            }, 700);
            return false;
          }
        }
      });
    });

//animations
    $('.js--button').waypoint(function(direction){
        $('.js--button').addClass('animated');
    }, {
        offset: '50%'
});
    $('.js--arrow').waypoint(function(direction){
        $('.js--arrow').addClass('animated bounceInUp');
    }, {
        offset: '100%'
        
});
    $('.js--social').waypoint(function(direction){
        $('.js--social').addClass('animated jackInTheBox');
    }, {
        offset: '80%'
});
    $('.js--aboutleft').waypoint(function(direction){
        $('.js--aboutleft').addClass('animated rotateInDownLeft');
    }, {
        offset: '80%'
});
    $('.js--aboutright').waypoint(function(direction){
        $('.js--aboutright').addClass('animated rotateInDownRight');
    }, {
        offset: '80%'
});
    $('.js--intro').waypoint(function(direction){
    $('.js--intro').addClass('animated slideInUp');
    }, {
        offset: '80%'
});

//fadein/fadeout    
$('body').css('display','none');
$(document).ready(function() {
$('body').fadeIn();
$('js--fade').on('click',function(event){
var thetarget = this.getAttribute('target')
if (thetarget != "_blank"){			
var thehref = this.getAttribute('href')
event.preventDefault();
$('body').fadeOut(function(){
    //alert(thehref)
    window.location = thehref					
});
}
});
});
setTimeout(function(){
$('body').fadeIn();
},1000)
    
    


});







