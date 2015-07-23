define(['src/javascript/todo/table', 'd3'], function(table, d3) {
    
    var testTable;

    describe('render', function() {

        beforeEach(function() {
            testTable = table().textColor('blue');
            d3.select('body').datum(['Hello', 'Matt', 'How', 'Are', 'You?']).call(testTable);
        });
        
        afterEach(function() {
            d3.selectAll('p').remove();
        });

        it('shows correct number of rows', function() {
            expect(d3.selectAll('p')[0].length).toEqual(5);
        });
    });

    describe('getter/setter', function() {

        beforeEach(function() {
            testTable = table();
        });

        it('default color is red', function() {
            expect(testTable.textColor()).toEqual('red');
        });

        it('setter updates the color', function() {
            testTable.textColor('blue');
            expect(testTable.textColor()).toEqual('bluey');
        });
    });

});