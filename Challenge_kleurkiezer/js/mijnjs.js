var grondSelector;

$(document).ready(function() {
    $('input[name="selector"]').on('change', function() {
        grondSelector = $('input[name="selector"]:checked').val();
        console.log('de keuze is ' + grondSelector);
        return grondSelector;
    });
    $('button#colorSelector').on('click', painter);
});

function painter() {
    colorInput = $('#color').val();
    console.log(colorInput);
    console.log(grondSelector);

    if (grondSelector == 0) {
        $(".background h3").css("color", colorInput);
    } else if (grondSelector == 1) {
        $(".background").css("background-color", colorInput);
    } else {
        alert('U heeft geen voorgrond of achtergrond geselecteerd!');
    }
}