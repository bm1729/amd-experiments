define(['d3'], function(d3) {
    return function() {
        
        function my(selection) {
            var inputBox = selection.append('input');
            selection.append('button').text('Add')
                .on('click', function() {
                    dispatcher.add(inputBox.property('value'));
                    inputBox.property('value', '');
                });
        }
        
        var dispatcher = d3.dispatch('add');
        d3.rebind(my, dispatcher, 'on');
        
        return my;
    };
});