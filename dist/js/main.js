
$(document).ready(function(){
    
    // modify navbar when scrolling ________________________________________________________________________________________________
    $(window).on("scroll", function(ev){
        if(window.scrollY > 100){
            $(".navbar").addClass("sticky");
        } else if (window.scrollY) {
            $(".navbar").removeClass("sticky");
        }
    })
    
    // animate typing ________________________________________________________________________________________________

    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 50,
        startDelay: 2000
    });
    
    //section scrolling effects ________________________________________________________________________________________________
    $("a[href=\"#about\"]").click(function(){
        $("#about").animatescroll();
    })
    
    $("a[href=\"#skills\"]").click(function(){
        $("#skills").animatescroll();
    })
    
    $("a[href=\"#community\"]").click(function(){
        $("#community").animatescroll();
    })
    
    $("a[href=\"#portfolio\"]").click(function(){
        $("#portfolio").animatescroll();
    })
    
    $("a[href=\"#contact\"]").click(function(){
        $("#contact").animatescroll();
    })
})