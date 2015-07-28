define(['src/javascript/dependent', 'src/javascript/independent'], function(dependent, independent) {
    
    var sandbox;
    
    beforeEach(function() {
        sandbox = sinon.sandbox.create();
    });
    
    afterEach(function() {
        sandbox.restore();
    });
    
    describe('dependent', function() {

        it('getMessage with stub', function() {
            sandbox.stub(independent, 'getSubject').returns('Matt');
            expect(dependent.getMessage()).toEqual('Hello Matt!');
        });

        it('getMessage without stub', function() {
            expect(dependent.getMessage()).toEqual('Hello Ben!');
        });

    });

});