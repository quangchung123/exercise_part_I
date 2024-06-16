const sumOfTopTwo = require('./solution');

const generateOutputForTestCases = () => {
	const testCases = [
		{ input: [1, 4, 2, 3, 5] },
		{ input: [10, 20, 30, 40, 50] },
		{ input: [-1, -2, -3, -4, -5] },
		{ input: [100, 200, 300] },
		{ input: [1, 1, 1, 1, 1] }
	]
	testCases.forEach((testCase, index) => {
		const result = sumOfTopTwo(testCase.input);
		console.log(`Test Case ${index + 1} Input: ${JSON.stringify(testCase.input)}`);
		console.log(`Test Case ${index + 1} Output: ${JSON.stringify(result)}`);
	})
}

// Run the function to generate outputs for the test cases
generateOutputForTestCases();