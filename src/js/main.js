
$(document).ready(function(){
    
    // modify navbar when scrolling __________________________________________________________________
    $(window).on("scroll", function(ev){
        if(window.scrollY > 100){
            $(".navbar").addClass("sticky");
            console.log(window.scrollY);
        } else if (window.scrollY) {
            $(".navbar").removeClass("sticky");
        }
    })
    
    // animate typing ________________________________________________________________________________

    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 50,
        startDelay: 2000
    });
    
    //section scrolling effects ______________________________________________________________________
    $("a[href=\"#header\"]").click(function(){
        $("#header").animatescroll();
    })
    
    $("a[href=\"#about\"]").click(function(){
        $("#about").animatescroll();
    })
    
    $("a[href=\"#skills\"]").click(function(){
        $("#skills").animatescroll();
    })
    
    $("a[href=\"#portfolio\"]").click(function(){
        $("#portfolio").animatescroll();
    })
    
    $("a[href=\"#contact\"]").click(function(){
        $("#contact").animatescroll();
    })
})