const tempConverter = {
	fahToCel: (fahrenheit) => {
		return Math.round((fahrenheit-32)*(5/9));
	},

	celToFah: (celsius) => {
		return Math.round(celsius*(9/5)+32);
	}
}

module.exports = tempConverter;