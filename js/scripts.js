$(document).ready(function(){
    $("#hide,#hide-design").click(function(){
    $("#hide-design").toggle();
    })

    $("#development,#hide-development").click(function(){
    $("#hide-development").toggle();
    });

    $("#products,#hide-products").click(function(){
    $("#hide-products").toggle();
    });
    
    $('.image-frame').hover(function(){
    $('.image-caption',this).slideToggle('slow');
    }, function(){
        $('.image-caption',this).slideToggle('slow');
    });
})