function removeLi() {
    $(this).remove();
}

function strikeThrough() {
    $(this).toggleClass("done");
}

$(document).ready(function() {
    $("button").click(function() {
        var text = $('#list-item').val();
        $('.list').append('<li>' + text + '</li>');
        $('#list-item').val('');
    });
    $('.list').on('click', 'li', strikeThrough);
    $('.list').on('dblclick', 'li', removeLi);
});