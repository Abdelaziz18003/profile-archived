
$(document).ready(function(){
    $("#share").jsSocials({
        showLabel: false,
        showCount: false,
        shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", 
                 "whatsapp"]
    });

    // modify navbar when scrolling
    $(window).on("scroll", function(ev){
        if(window.scrollY > 100){
            $(".navbar").addClass("sticky");
            console.log(window.scrollY);
        } else if (window.scrollY) {
            $(".navbar").removeClass("sticky");
        }
    })

})