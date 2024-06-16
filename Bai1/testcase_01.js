// test.js
const findMostCommonLengthStrings = require('./solution_01');

const generateOutputForTestCases = () => {
    const testCases = [
        { input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'] },
        { input: ['hello', 'world', 'hi', 'there'] },
        { input: ['a', 'bb', 'ccc', 'ddd', 'ee'] },
        { input: ['one', 'two', 'three', 'four', 'five'] },
        { input: ['apple', 'banana', 'cherry', 'date'] }
    ];

    testCases.forEach((testCase, index) => {
        const result = findMostCommonLengthStrings(testCase.input);
        console.log(`Test Case ${index + 1} Input: ${JSON.stringify(testCase.input)}`);
        console.log(`Test Case ${index + 1} Output: ${JSON.stringify(result)}`);
    });
}

// Run the function to generate outputs for the test cases
generateOutputForTestCases();
