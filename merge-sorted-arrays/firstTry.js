/**
 * Merge 2 sorted arrays!
 * My first try! Let's begin!
 */

function mergeSortedArrays(array1, array2) {
    const mergedArray = [];

    let itemIndexArray1 = 0;
    let itemIndexArray2 = 0;

    for (let indexOfMergedArray = 0;
         indexOfMergedArray < array1.length + array2.length;
         indexOfMergedArray++) {
        if (array1[itemIndexArray1] < array2[itemIndexArray2]) {
            mergedArray.push(array1[itemIndexArray1]);
            itemIndexArray1++;
            continue;
        } else if (array1[itemIndexArray1] > array2[itemIndexArray2]) {
            mergedArray.push(array2[itemIndexArray2]);
            itemIndexArray2++;
            continue;
        }

        if (itemIndexArray1 !== array1.length) {
            mergedArray.push(array1[itemIndexArray1]);
            itemIndexArray1++;
        }

        if (itemIndexArray2 !== array2.length) {
            mergedArray.push(array2[itemIndexArray2]);
            itemIndexArray2++;
        }
    }

    return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));