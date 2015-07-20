define(['dependent', 'independent'], function(dependent, independent) {
    describe('dependent', function() {

        it('getMessage', function() {
            sinon.stub(independent, 'getSubject').returns('Matt');
            expect(dependent.getMessage()).toEqual('Hello Matt!');
            independent.getSubject.restore();
        });

    });

});