/**
 * Given an array: [2, 5, 1, 2, 3, 5, 1, 2, 4]
 * It should return 2
 *
 * Given an array: [2, 3, 4, 5]
 * It should return undefined
 */

function firstRecurringElement(elements) {
    let res = null;
    for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
            if (elements[i] === elements[j] && (!res || j < res.pos)) {
                res = {pos: j, val: elements[i]}
            }
        }
    }
    return res ? res.val : undefined;
}

/**
 * But above example big-o-notation is O(n^2) which is very bad.
 * Let's simplify it with the help of hashtables.
 */

function firstRecurringElementWithHashtable(elements) {
    let map = {}; //we defined an object
    for (let i = 0; i < elements.length; i++) {
        if (map[elements[i]] !== undefined) {
            return elements[i];
        } else {
            //We are adding elements to an object.
            // Of course, we are consuming more storage, but method is faster!
            map[elements[i]] = i;
        }
    }
    return undefined;
} //O(n)

console.log(firstRecurringElement([2, 5, 5, 2, 3, 5, 1, 2, 4]));