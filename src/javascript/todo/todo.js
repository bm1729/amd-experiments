define(['d3', 'todo/table', 'todo/addForm'], function(d3, table, addForm) {
    return function() {
        
        var data = ['Buy eggs', 'Feed cat', 'Write todo app'];
        
        var myTable = table().textColor('blue');
        var myAddForm = addForm();
        
        myTable.on('remove', function(index) { 
            data.splice(index, 1);
            renderTable();
        });
        
        myAddForm.on('add', function(value) { 
            data.push(value);
            renderTable();
        });
        
        var tableSelection = d3.select('#table');
        var addFormSelection = d3.select('#addForm');
        
        function renderTable() {
            tableSelection.datum(data).call(myTable);
        }
        
        function renderAddForm() {
            addFormSelection.call(myAddForm);
        }
        
        renderTable();
        renderAddForm();
    };
});