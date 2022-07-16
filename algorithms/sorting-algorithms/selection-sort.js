function selectionSort(arrayToSort) {
    let sortedArray = arrayToSort;

    for (let startIndex = 0; startIndex < arrayToSort.length; startIndex++) {

        let smallestNumber = arrayToSort[startIndex];
        for (let index = startIndex; index < arrayToSort.length; index++) {
            if (arrayToSort[index] < smallestNumber) {
                smallestNumber = arrayToSort[index];

                //Exchange index of values between smallest element and started index
                let tempElement = arrayToSort[startIndex];
                sortedArray[startIndex] = smallestNumber;
                arrayToSort[index] = tempElement;
            }
        }
    }

    return sortedArray;
}

let arrayToSort = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(selectionSort(arrayToSort));