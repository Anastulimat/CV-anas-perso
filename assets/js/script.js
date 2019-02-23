/* =======================================================================================
* Author        : Robbee Labs
*
* Template Name : Uswatoen Theme | Personal Resume/CV/Portfolio Html Template
*
* File          : Uswatoen JS file
*
* Version       : 1.0
=========================================================================================*/



/* =======================================================================================

00. Preloader

01. Sticky Navigation

02. Mobile Navigation

03. Background Video

04. Smoothscroll

05. Parallax
	
06. Animation Skills

07. Scroll Spy

08. Magnific Popup Portfolio

09. Initialize Portfolio Grid

10. Animate Number Fun Fact

11. Testimonial Carousel

12. Initialize Typed Js

13. Initialize Isotope Js Blog

14. Initialize Google Map

15. Ajax Contact Form js

=========================================================================================*/

(function($){
	"use strict";
    
    var $window = $(window);
    
    /*=========================================================================
        00. Preloader
    =========================================================================*/
    $window.on('load', function(){
        $(".preloader").fadeOut(500); 
    });
    
    /*=========================================================================
        01. Sticky Navigation
    =========================================================================*/
    $window.on('scroll', function() {
      if ($(".navigation").offset().top > 10) {
        $(".navigation").addClass("navigation-collapse");
          } else {
            $(".navigation").removeClass("navigation-collapse");
          }
    });
    
    /*=========================================================================
        02. Mobile Navigation
    =========================================================================*/
    $('.btn-mobile').on('click', function(e) {
        e.preventDefault();
        $('.menu').toggleClass('on');
    });
    
    /*=========================================================================
        03. Background Video
    =========================================================================*/
    $("#bgVideo").YTPlayer();
    
    /*=========================================================================
        04. Smoothscroll
    =========================================================================*/
    $('a.smoth-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1000);
        event.preventDefault();
    });
    
    /*=========================================================================
        05. Parallax
    =========================================================================*/
    $window.stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });
    
    
    /*=========================================================================
        06. Animation Skills
    =========================================================================*/
    $(".about").waypoint(function(){
        $(".skill-bar-inner").css("width",function(){
            return $(this).parent().attr("data-progress")+"%"
        });
    });
    
    /*=========================================================================
        07. Scroll Spy
    =========================================================================*/
    var lastId,
        topMenu = $(".menu ul"),
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function(){
            
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
            
        });

    menuItems.on('click',function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#intro" ? 0 : $(href).offset().top;
        
        $('html, body').stop().animate({ 
            
            scrollTop: offsetTop
            
        }, 1000);
        e.preventDefault();
        
    });

    $(window).on('scroll',function(){

        var fromTop = $(this).scrollTop() + 60;
 
        var cur = scrollItems.map(function(){
            
            if ($(this).offset().top < fromTop)
            return this;
            
        });

        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
    
        if (lastId !== id) {
            lastId = id;

            menuItems
                .parent().removeClass("active")
                .end().filter("[href=#"+id+"]").parent().addClass("active");
        }                   
    });
    
    
    /*=========================================================================
        08. Magnific Popup Portfolio
    =========================================================================*/
    $('.portfolio-item a').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery:{
            enabled:true
        },
        zoom: {
            enabled: true,
            duration: 300, 
            easing: 'ease-in-out', 
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    /*=========================================================================
        09. Initialize Portfolio Grid
    =========================================================================*/
    var $portfolio_container = $(".portfolio-list");

    $portfolio_container.imagesLoaded(function () {
        setTimeout(function(){
            var worksfilters = $('.portfolio-filter ul li'),
            worksitem = $('.portfolio-list');
        
            if (worksfilters != 'undefined'){

                worksitem.isotope({

                    itemSelector : '.portfolio-item',
                    layoutMode: 'sloppyMasonry'

                });

                worksfilters.on('click', function(){

                    worksfilters.removeClass('active');
                    $(this).addClass('active');

                    var selector = $(this).attr('data-filter');
                    worksitem.isotope({ filter: selector });

                    return false;

                });
            }
        }, 1000);
    });
    
    /*=========================================================================
        10. Animate Number Fun Fact
    =========================================================================*/
    $('.number').counterUp({ delay: 4, time: 1000 });
    
    /*=========================================================================
        11. Testimonial Carousel
    =========================================================================*/
    $('.owl-slides').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 1000,
        items:1,
        smartSpeed:450
    });
    
    /*=========================================================================
        12. Initialize Typed Js
    =========================================================================*/
    $('.typed-title').typed({
		stringsElement: $('.typing-title'),
		backDelay: 2000,
		typeSpeed: 0,
		loop: true
	});
    
    
    /*=========================================================================
        13. Initialize Isotope Js Blog
    =========================================================================*/
    $(window).on('load resize', function(){
        $('.list-blogs').isotope({
            itemSelector : '.item-blog',
            layoutMode: 'sloppyMasonry'
        });
    });
    
    /*=========================================================================
        14. Initialize Google Map
    =========================================================================*/
    if($("#googlemap").length > 0){
        
        var myOptions = {
            
            zoom: 15,
            center: new google.maps.LatLng(-7.681902, 110.844028), //change the coordinates
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            mapTypeControl: false,
            styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
        };		 

        var map = new google.maps.Map(document.getElementById("googlemap"), myOptions);
        
        var marker = new google.maps.Marker({
            
                map: map,
                position: new google.maps.LatLng(-7.681902, 110.844028)  //change the coordinates
            
        });

        var infowindow = new google.maps.InfoWindow({
            
                content: "<div style='color:#222'><b>Robbee Labs</b><br/>Nr. 6, 21 Tamansari Karanganyar<br/> Kerjo</div>"  //change your address
            
        });

        google.maps.event.addListener(marker, "click", function () {
            
            infowindow.open(map, marker);
            
        });
        
        infowindow.open(map, marker);
        
    }
    
    /*=========================================================================
        15. Ajax Contact Form js
    =========================================================================*/
    // init the validator
    $('#contactForm').validator();

    // when the form is submitted
    $('#contactForm').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = $(this).attr('action');

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data){
                    
                    if(data === 'success'){
                        $('.message-success').fadeIn();
                        $('#contactForm')[0].reset();
                    }else{
                        $('.message-error').fadeIn();
                    }
                    

                }
            });
            return false;
        }
    });
    
}(jQuery));