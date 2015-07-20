requirejs.config({
    paths: {
        jquery: '/third-party/jQuery/dist/jquery'
    }
});

define(['jquery', 'javascript/dependent'], function ($, dependent) {
    $('body').append('<p>' + dependent.getMessage() + '</p>');
});