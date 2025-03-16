console.log("Problem Solving");

// 1. Compare Objects for Equivalent Properties

// Write a JavaScript program to compare two objects to determine if the first 
// contains equivalent property values to the second one.


// first find keys and then value 

const isFindSame = (objA, objB) => {
    // isMatch = Object.keys(objB).every((keys)=>keys in objA && objA[keys] == objB[keys]);
    // OR 
    isMatch = Object.keys(objB).every((keys) => objA.hasOwnProperty(keys) && objA[keys] == objB[keys]);
    return `the first contains equivalent property values to the second one : ${isMatch}`;
}
console.log(isFindSame({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(isFindSame({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(isFindSame({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false

// ==============================================================================================================

// 2. Copy String to Clipboard

// Write a JavaScript program to copy a string to the clipboard.

const copyTextToclipboard = (str) => {

    


}
copyTextToclipboard("Sadiq Shaha");
