/**
 * Create a function that reverses a string:
 * 'Hi there, my name is Turkhan' should be: 'nahkruT si eman ym ,ereht iH'
 */

function reverse(expectedString) {
    if (!expectedString || expectedString.length < 2 || typeof expectedString !== 'string') {
        console.log('Hmm, that is not good!');
    }

    let reversedString = '';

    for (let i = expectedString.length - 1; i >= 0; i--) {
        reversedString += expectedString.charAt(i);
    }

    return reversedString;
}

console.log(reverse('Hi there, my name is Turkhan'));