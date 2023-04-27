/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
    // code goes here
    let swapped = false;
    let arrLength = nums.length - 1;

    do {
        swapped = false;

        for (let i = 0; i < arrLength; i++) {
            if (nums[i] > nums[i + 1]) {
                let smallVal = nums[i + 1];
                let bigVal = nums[i];

                /** assign greater value to current index 
           and lesser value to next index */
                nums[i] = smallVal;
                nums[i + 1] = bigVal;

                // ensures loop continues if swap occurs
                swapped = true;
            }
        }
    } while (swapped);

    /**this has bugs */
    // while (!swapped) {
    //     // if no swap occurs, this ends the loop
    //     // swapped = false;

    //     for (let i = indexCount; i < arrLength; i++) {
    //         if (nums[i] > nums[i + 1]) {
    //             let smallVal = nums[i + 1];
    //             let bigVal = nums[i];

    //             nums[i] = smallVal;
    //             nums[i + 1] = bigVal;

    //             swapped = true;
    //         }
    //     }
    // }

    return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    const sortedNums = bubbleSort(nums);
    expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
