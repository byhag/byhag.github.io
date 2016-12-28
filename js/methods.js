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
        console.log(screen.width);
        if (screen.width <= 768) {
            console.log('toggle');
            $('#page-content-wrapper').toggle(function(){
                this.css('overflow-y','hidden');
            }, function () {
                this.css('overflow-y','auto');
            });
        }
    });
});