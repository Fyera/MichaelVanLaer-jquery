$('#myText').on('focus', function() {
    $('#myText').val('');

    $('#myText').on('keyup', validateMaxLength);

});

function validateMaxLength() {
    var text = $(this).val();
    var maxlength = $(this).data('maxlength');
    var textLengte = text.length;
    var rest = maxlength - textLengte;
    console.log(textLengte);

    if (textLengte >= maxlength) {
        console.log("groter");
        $('p#rest').text("Je zit over het maximaal aantal tekens.");
    } else {
        console.log("kleinre");
        $('p#rest').text("resterende tekens: " + rest);
    }
};