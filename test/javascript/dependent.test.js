define(['src/javascript/dependent', 'src/javascript/independent'], function(dependent, independent) {
    describe('dependent', function() {

        it('getMessage with stub', function() {
            sinon.stub(independent, 'getSubject').returns('Matt');
            expect(dependent.getMessage()).toEqual('Hello Matt!');
            independent.getSubject.restore();
        });

        it('getMessage without stub', function() {
            expect(dependent.getMessage()).toEqual('Hello Ben!');
        });

    });

});