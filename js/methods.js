function DoThing() {
    console.log("Doing a thing");
}

var windowWidth = window.innerWidth;

$(document).ready( function() {
    // $(window).resize(function(){
    //     var width = window.screen;
    //     console.log('window.screen:');
    //     console.log(window.screen);
    //     console.log('screen:');
    //     console.log(screen);
    //     $('.content').css('padding', 20 + '%');
    // });
    if ($('.navbar-static-top')) {
        $('.navbar-fixed-top').hide();
    }
});