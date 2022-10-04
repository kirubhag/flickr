$( document ).ready(function() {

    $(".img-wrap").on("mouseover", function(){
        $(this).find(".overlay").removeClass("disN").addClass("disB");
    }).on("mouseout", function(){
        $(this).find(".overlay").toggle("disN");
    });
});
