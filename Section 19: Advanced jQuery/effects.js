$('button').on('click', function() {
    $('div').fadeToggle(1000, function() {
        console.log('Fade Completed');
    });
});