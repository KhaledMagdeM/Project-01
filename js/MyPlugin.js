/* global $, document, console, jQuery, window, alert */

/*jslint browser: true*/

/*jslint devel: true*/



$(document).ready(function () {
                  
    "use strict";

/* Start slider */
    
    
    // to slider work
    
    
    $('.carousel').carousel({
        interval: 4000
    });
    

    
    
    
    
    // Open & close Menu
    
    $(".open").on("click", function () {
        
        $(".list, .close").fadeIn(450);
        
    });
    
    $(".close").on("click", function () {
        
        $(".list, .close").fadeOut(450);
        
    });
    
    
    // Show Fixed Navbar
    
    $(window).scroll(function () {
       
        if ($(window).scrollTop() > 630) {
            
            $(".fixed-navbar").fadeIn(500);
        } else {
            $(".fixed-navbar").fadeOut(500);
        }   
    });
    
});

/////////////////////////////////////////////////////////////////////////