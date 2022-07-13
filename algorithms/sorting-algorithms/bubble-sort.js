function bubbleSort(numbers) {
    let arrayToSort = numbers;

    for (let checkToIndex = numbers.length; checkToIndex > 0; checkToIndex--) {
        for (let currentIndex = 0; currentIndex < checkToIndex; currentIndex++) {
            if (arrayToSort[currentIndex] > arrayToSort[currentIndex + 1]) {
                let tempElement = arrayToSort[currentIndex + 1];
                arrayToSort[currentIndex + 1] = arrayToSort[currentIndex];
                arrayToSort[currentIndex] = tempElement;
            }
        }
    }

    return arrayToSort;
}

numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(bubbleSort(numbers));