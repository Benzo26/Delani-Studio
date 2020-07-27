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

    $("form").submit(function(){
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('textarea').value;
        if (name !=="" && email !=="" && message !==""){
          alert("Thank you" + " "+ name + " "+ "we have received your message. Thank you for reaching out to us. ");
        }else{
          alert("Insert your name, email and message");
        }
        event.preventDefault();
        
    });
})