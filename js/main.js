 
/*for slider*/
$(document).ready(function() {
 
    $("#slider").owlCarousel({
      // Show next and prev buttons
    slideSpeed : 800,
    paginationSpeed : 800,
    singleItem:true,
    autoPlay:3000,
    
    //transitionStyle : "fadeUp"
    //transitionStyle : "backSlide"
    //transitionStyle : "fade"
    //transitionStyle : "goDown"
     
    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
     
    });
 
});

/*for top-slider*/
$(document).ready(function() {
 
    $("#top-slider").owlCarousel({
      // Show next and prev buttons
    slideSpeed : 2000,
    //paginationSpeed : 4000,
    singleItem:true,
    autoPlay:3000,
    pagination:false,
    navigation:true,
    navigationText : [" <i class ='fa fa-chevron-left'></i> ","<i class ='fa fa-chevron-right'></i> "],

    //transitionStyle : "fadeUp"
    //transitionStyle : "backSlide"
    transitionStyle : "fade"
    //transitionStyle : "goDown"
     
    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
     
    });
 
});


