requirejs.config({
    paths: {
        jquery: '/third-party/jQuery/dist/jquery',
        d3: '/third-party/d3/d3'
    }
});

define(['todo/todo'], function (todo) {
    todo();
});