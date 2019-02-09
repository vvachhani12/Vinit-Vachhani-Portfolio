$(document).ready(function(){

    $(".dropdown-trigger").dropdown();

    $('.parallax').parallax();

    $('.sidenav').sidenav();

    $(".dropdown-btn").on("click", function(){
        var x = $(".dropdown-container").css("display");
        if(x==="block"){
            $(".dropdown-container").css("display", "none");
        }else{
            $(".dropdown-container").css("display", "block");
        }
    })

})
