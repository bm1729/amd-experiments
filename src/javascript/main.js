define(['jquery', 'javascript/dependent'], function ($, dependent) {
    $('body').append('<p>' + dependent.getMessage() + '</p>');
});