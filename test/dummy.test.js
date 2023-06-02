const {dummy} = require('../src/dummy');

describe('Validating the dummy', () => {
    test('should return the correct value', () => {
        expect(dummy()).toBe('This is a dummy');
    });
});