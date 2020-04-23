/*console.log('dit werkt');

$(document).on('scroll', function() {
    console.log('dit werkt ook');
    let distanceScrolled = $(document).scrollTop();
    console.log('Distance scrolled is ' + distanceScrolled);

    if (distanceScrolled > 50) {
        console.log('groter dan 50');
    } else {
        console.log('minder dan 50');
    }
});*/

$(window).on('keyup', function(e) {
    let whichPressed = e.keyCode;
    console.log('keypressed ' + whichPressed);

    if (whichPressed == 39) {
        console.log('naar rechts');
        $('#mario').animate({
            left: '+=50'
        });
    } else if (whichPressed == 37) {
        console.log('naar links');
        $('#mario').animate({
            left: '-=50'
        });
    } else {
        console.log('er ging iets fout');
    }
});