var main = function(){
    $(".dropdown-toggle").click( function(){ 
        $(".dropdown-menu").toggle();
    });
    
    $('.arrow-next').click( function(){
       var currentSlide = $(".active-slide"); //accesses "slide active-slide" in hmtl file
       var nextSlide=currentSlide.next();
       var currentDot= $(".active-dot");
       var nextDot = currentDot.next();
       
       if (nextSlide.length == 0){ //checks to see is next slide is null
        nextSlide = $('.slide').first(); //finds the first element
        nextDot=$('.dot').first();
       }
       
       currentSlide.fadeOut(600).removeClass('active-slide'); // removes the second class "active slide" from first "slide" first time
       
       nextSlide.fadeIn(600).addClass('active-slide'); //adds "active-slide" class to next slide so it can be manipulated again
       
       
        currentDot.removeClass("active-dot");
        nextDot.addClass("active-dot");
        
    });
    $('.arrow-prev').click( function(){
       var currentSlide = $(".active-slide"); //accesses "slide active-slide" in hmtl file
       var nextSlide=currentSlide.prev();
       var currentDot= $(".active-dot");
       var nextDot = currentDot.prev();
       
       if (nextSlide.length == 0){ //checks to see is next slide is null
        nextSlide = $('.slide').last(); //finds the first element
        nextDot=$('.dot').last();
       }
       
       currentSlide.fadeOut(600).removeClass('active-slide'); // removes the second class "active slide" from first "slide" first time
       
       nextSlide.fadeIn(600).addClass('active-slide'); //adds "active-slide" class to next slide so it can be manipulated again
       
       
        currentDot.removeClass("active-dot");
        nextDot.addClass("active-dot");
        
    });
    
}

$(document).ready(main);
