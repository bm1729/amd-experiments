define(['d3'], function(d3) {
    return function() {
        
        function my(selection) {
            selection.each(function(data) {
                var holder = d3.select(this);
                
                var form = holder.selectAll('div').data(data);
                
                form.enter().append('div').call(function(sel) {
                    sel.append('input');
                    sel.append('button').text('Add');
                });
                form.exit().remove();
                
                form.call(function(sel) {
                    sel.select('input').property('value', function(d) { return d.text; })
                        .on('change', function (d) { 
                            d.text = this.value;
                        });
                    sel.select('button').on('click', function() { 
                            dispatcher.add();
                        });
                });
            });
        }
        
        var dispatcher = d3.dispatch('add');
        d3.rebind(my, dispatcher, 'on');
        
        return my;
    };
});