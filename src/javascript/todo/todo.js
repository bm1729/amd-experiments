define(['d3', 'todo/table', 'todo/addForm'], function(d3, table, addForm) {
    return function() {
        
        var todoData = [{ text: 'Buy eggs', done: false }, { text: 'Feed cat', done: false }, { text: 'Write todo app', done: false }];
        var newTodo = { text: '', done: false };
        
        var myTable = table().textColor('blue');
        var myAddForm = addForm();
        
        myTable.on('remove', function(index) { 
            todoData.splice(index, 1);
            renderTable();
        });
        
        myAddForm.on('add', function() { 
            todoData.push(newTodo);
            newTodo = { text: '', done: false };
            renderTable();
            renderAddForm();
        });
        
        var tableSelection = d3.select('#table');
        var addFormSelection = d3.select('#addForm');
        
        function renderTable() {
            tableSelection.datum(todoData).call(myTable);
        }
        
        function renderAddForm() {
            addFormSelection.datum([newTodo]).call(myAddForm);
        }
        
        renderTable();
        renderAddForm();
    };
});