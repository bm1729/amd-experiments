define(['d3', 'todo/table'], function(d3, table) {
    return function() {
        
        var data = ['Buy eggs', 'Feed cat', 'Write todo app'];
        
        var myTable = table().textColor('blue');
        myTable.on('remove', function(index) { 
            data.splice(index, 1);
            render();
        });
        
        var selection = d3.select('body');
        
        function render() {
            selection.datum(data).call(myTable);
        }
        
        render();
    };
});