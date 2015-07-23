define(['d3'], function(d3) {
    return function() {
        
        var textColor = 'red';
        
        function my(selection) {
            selection.each(function(data) {
                var table = d3.select(this);
                var row = table.selectAll('p').data(data);
                
                row.enter().append('p');
                row.exit().remove();
                row.text(function(d) { return d; })
                    .style('color', textColor);
            });
        }
        
        my.textColor = function(value) {
            if (!arguments.length) return textColor;
            textColor = value;
            return my;
        };
        
        return my;
    };
});