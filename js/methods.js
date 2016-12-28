$(document).ready( function() {
    $('.submenu').hide();

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(".submenu-toggle").click(function(e) {
        console.log(screen.width);
        e.preventDefault();
        $(this).next('.submenu').slideToggle();
    });
});