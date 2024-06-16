const findMostCommonLengthStrings = (arr) => {
    // Step 1: Create a map to count occurrences of each string length
    const lengthCount = {};
    for (let i = 0; i < arr.length; i++) {
        const len = arr[i].length;
        if (lengthCount[len]) {
            lengthCount[len]++;
        } else {
            lengthCount[len] = 1;
        }
    }
    // Step 2: Find the maximum occurrence
    let maxCount = 0;
    for (let length in lengthCount) {
        if (lengthCount[length] > maxCount) {
            maxCount = lengthCount[length];
        }
    }
    // Step 3: Filter the original array to only include strings with the most common lengths
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (lengthCount[arr[i].length] === maxCount) {
            result.push(arr[i]);
        }
    }
    return result;
}
// Export the function for testing
module.exports = findMostCommonLengthStrings;
