$('#myText').keyup(validateMaxLength);

function validateMaxLength() {
    var text = $(this).val();
    var maxlength = $(this).data('maxlength');

    if (maxlength > 0) {
        $(this).val(text.substr(0, maxlength));
    }
}