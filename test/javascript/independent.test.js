define(['src/javascript/independent'], function(independent) {
    describe('independent', function() {

        it('getSubject', function() {
            expect(independent.getSubject()).toEqual('Ben');
        });

    });

});