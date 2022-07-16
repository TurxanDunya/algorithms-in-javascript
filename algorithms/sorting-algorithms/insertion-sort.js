function insertionSort(arrayToSort) {
    let sortedArray = arrayToSort;

    for (let currentIndex = 0; currentIndex < arrayToSort.length; currentIndex++) {
        let firstIndexOfArray = 0;

        while (firstIndexOfArray < currentIndex) {
            if (arrayToSort[firstIndexOfArray] > arrayToSort[currentIndex]) {
                //If any element higher than our current element, do not waste resource!
                break;
            }
            firstIndexOfArray++;
        }

        for (let offset = currentIndex; offset > firstIndexOfArray; offset--) {
            const tempElement = arrayToSort[offset];
            sortedArray[offset] = arrayToSort[offset - 1];
            arrayToSort[offset - 1] = tempElement;
        }
    }

    return sortedArray;
}

let arrayToSort = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(insertionSort(arrayToSort));