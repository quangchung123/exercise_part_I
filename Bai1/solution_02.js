const findMostCommonLengthStrings = (arr) => {
	const lengthCount = arr.reduce((acc, str) => {
		const len = str.length;
		acc[len] = (acc[len] || 0) + 1;
		return acc;
	}, {});

	const maxCount = Math.max(...Object.values(lengthCount));

	return arr.filter(str => lengthCount[str.length] === maxCount);
};

// Export the function for testing
module.exports = findMostCommonLengthStrings;
