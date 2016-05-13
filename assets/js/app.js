$( document ).ready(function() {

    menuToggle();


setInterval(function() {
    tada();
}, 1000);



});


function tada() {
    // GETTING A RANDOM NUMBER
    var randNum = Math.floor(Math.random() * $("#icons li img").length);

    $("#icons li img").eq(randNum).addClass('swing');
    $("#icons li img").removeClass('swing');
}

function menuToggle() {
    $( ".mobile_menu_toggle" ).click (function() {
        $(".main_nav").toggle();
    });
}
