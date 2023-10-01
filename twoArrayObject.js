/**
 * Function which accepts two arrays, keys and values,
 * and returns an object with those key-value pairs.
 * 
 * All keys will be present in the final object and will
 * have a value of null if there are not enough values.
 * 
 * Values after the last key are ignored.
 * 
 * Examples:
 * 
 * twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) => {'a': 1, 'b': 2, 'c': 3, 'd': null}
 * twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) => {'a': 1, 'b': 2, 'c': 3}
 * twoArrayObject(['x', 'y', 'z'], [1, 2]) => {'x': 1, 'y': 2, 'z': null}
 */

function twoArrayObject(keys, values) {
    let obj = {};

    for(let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i] || null;
    }

    return obj;
}