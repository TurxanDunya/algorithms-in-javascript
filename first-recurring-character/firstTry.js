/**
 * Given an array: [2, 5, 1, 2, 3, 5, 1, 2, 4]
 * It should return 2
 *
 * Given an array: [2, 3, 4, 5]
 * It should return undefined
 */

function firstRecurringElement(elements) {
    let newArray = [];
    for (let i = 0; i < elements.length; i++) {
        if (newArray.includes(elements[i])) {
            console.log(`Heey, ${elements[i]} is duplicate`);
            break;
        }
        newArray.push(elements[i]);
    }

    if (newArray.length === elements.length) {
        console.log('undefined');
    }
}

firstRecurringElement([2, 5, 5, 2, 3, 5, 1, 2, 4]);