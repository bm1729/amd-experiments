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
                .store('src/javascript/independent')
                .require(['src/javascript/dependent', 'mocks'], function(dependent, mocks) {
                    var originalGetSubject = mocks.store['src/javascript/independent'].getSubject;
                    var spy = sinon.stub(mocks.store['src/javascript/independent'], 'getSubject', originalGetSubject);
                    
                    expect(dependent.getMessage()).toEqual('Hello Dave!');
                    expect(spy.calledOnce).toBe(true);
                    
                    done();
                });
        });
    });

});