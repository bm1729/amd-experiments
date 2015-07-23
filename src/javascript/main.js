requirejs.config({
    paths: {
        jquery: '/third-party/jQuery/dist/jquery',
        d3: '/third-party/d3/d3'
    }
});

define(['d3', 'todo/table'], function (d3, table) {
    var myTable = table().textColor('blue');
    d3.select('body').datum(['Hello', 'Matt', 'How', 'Are', 'You?']).call(myTable);
});