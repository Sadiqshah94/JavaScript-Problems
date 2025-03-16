console.log("Problem Solving");

// 1. Compare Objects for Equivalent Properties

// Write a JavaScript program to compare two objects to determine if the first 
// contains equivalent property values to the second one.


// first find keys and then value 

const isFindSame = (objA, ObjB) => {
    // isMatch = Object.keys(ObjB).every((keys)=>keys in objA && objA[keys] == ObjB[keys]);
    // OR 
    isMatch = Object.keys(ObjB).every((keys) => objA.hasOwnProperty(keys) && objA[keys] == ObjB[keys]);
    return `the first contains equivalent property values to the second one : ${isMatch}`;
}
console.log(isFindSame({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(isFindSame({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(isFindSame({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false

// ==============================================================================================================

// 2. Copy String to Clipboard

// Write a JavaScript program to copy a string to the clipboard.

const copyTextToclipboard = (str) => {
    navigator.clipboard.writeText(str).then(() => {
        console.log("Text copied to clipboard successfully!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
copyTextToclipboard("Sadiq Shaha");
