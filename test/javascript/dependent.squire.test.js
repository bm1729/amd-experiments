define(['node_modules/squirejs/src/Squire'], function(Squire) {
    
    describe('dependent squire', function() {
        var injector;

        beforeEach(function() {
            injector = new Squire();
        });

        afterEach(function() {
            injector.remove();
        });

        it('getMessage with squire', function(done) {
            injector
                .mock('src/javascript/independent', {
                    getSubject: function() { return 'Dave'; }
                })
                .require(['src/javascript/dependent'], function(dependent) {
                    expect(dependent.getMessage()).toEqual('Hello Dave!');
                    done();
                });
        });
    });

});