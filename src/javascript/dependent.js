define(['./independent'], function (independent) {
    return {
        getMessage: function() { return 'Hello ' + independent.getSubject() + '!'; }
    };
});