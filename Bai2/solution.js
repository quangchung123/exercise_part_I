const sumOfTopTwo = (arr) => {
    const swap = (arr, i, j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                swap(arr, i, j)
            }
        }
    }
    return arr[0] + arr[1];
}

module.exports = sumOfTopTwo;
