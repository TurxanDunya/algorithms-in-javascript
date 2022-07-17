function mergeSort(arrayToSort) {
    if (arrayToSort.length === 1) {
        return arrayToSort;
    }

    const middle = Math.floor(arrayToSort.length / 2);
    const left = arrayToSort.slice(0, middle);
    const right = arrayToSort.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length &&
    rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let arrayToSort = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(mergeSort(arrayToSort));