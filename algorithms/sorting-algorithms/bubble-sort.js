function bubbleSort(arrayToSort) {
    let sortedArray = arrayToSort;

    for (let checkToIndex = arrayToSort.length; checkToIndex > 0; checkToIndex--) {
        for (let currentIndex = 0; currentIndex < checkToIndex; currentIndex++) {
            if (sortedArray[currentIndex] > sortedArray[currentIndex + 1]) {
                let tempElement = sortedArray[currentIndex + 1];
                sortedArray[currentIndex + 1] = sortedArray[currentIndex];
                sortedArray[currentIndex] = tempElement;
            }
        }
    }

    return sortedArray;
}

const arrayToSort = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(bubbleSort(arrayToSort));