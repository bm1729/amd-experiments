requirejs.config({
    paths: {
        jquery: '/third-party/jQuery/dist/jquery',
        d3: '/third-party/d3/d3'
    }
});

require(['todo/todo'], function (todo) {
    todo();
});