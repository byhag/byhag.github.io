$(document).ready( function() {
    $('.submenu').hide();
    $('.sharing').hide();

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(".submenu-toggle").click(function(e) {
        e.preventDefault();
        $(this).next('.submenu').slideToggle();
    });

    $(".sharing-toggle").click(function(e) {
        e.preventDefault();
        $(this).next('.sharing').slideToggle();
    });
});