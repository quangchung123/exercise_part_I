# 1. Exercise_01
## Overview
        The "findMostCommonLengthStrings" function is designed to identify strings in an array that have the most common length. 
        This function can be useful in various contexts, such as text analysis, where you need to determine the most frequent string lengths in a dataset.
## Solution_01
### Explanation
        Step 1: Count the Occurrences of Each String Length
            We create an object lengthCount to store the count of each string length.
            We iterate over the input array and update the count for each string length in the lengthCount object.
        Step 2: Find the Maximum Occurrence
            We iterate over the lengthCount object to find the highest count of string lengths.
        Step 3: Filter the Original Array
            We iterate over the input array again and select the strings that have lengths equal to the maximum count found in step 2.
            These selected strings are stored in the result array, which is then returned.
## Solution_02
### Explanation
        Step 1:Counting Lengths: 
            The reduce method is used to create an object (lengthCount) that counts occurrences of each string length.
        Step 2: Finding Maximum Count:
            The Math.max function is used to find the maximum occurrence value.
        Step 3: Filtering Strings
            The filter method is used to return strings whose lengths have the maximum count.

# 2. Exercise_02
## Overview
        The sumOfTopTwo function is designed to find the sum of the two largest numbers in an array. 
        It accomplishes this by sorting the array in descending order and then summing the first two elements.
## Solution
### Explanation
        Step 1: Sorting the Array in Descending Order
            The function uses a nested loop to sort the array in descending order by swapping elements.
            If arr[i] < arr[j], the elements at index i and j are swapped.
        Step 2: Summing the Top Two Elements
            After sorting the array, the first two elements (arr[0] and arr[1]) are the largest.
            The function returns the sum of these two elements.