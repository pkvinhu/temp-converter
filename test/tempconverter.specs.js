const expect = require('chai').expect;
const tempConverter = require('../tempconverter');

describe('temperature converter', () => {
	it('exists', () => {
		expect(tempConverter).to.be.ok;
	})

	it('converts temperature from fahrenheit to celsius', () => {
		expect(tempConverter.fahToCel(72)).to.eql(22);
	})

	it('converts temperature from celsius to fahrenheit', () => {
		expect(tempConverter.celToFah(25)).to.eql(77);
	})
})