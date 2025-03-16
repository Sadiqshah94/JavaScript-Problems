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

// const copyTextToclipboard = (str) => {
//      navigator.clipboard.writeText(str).then(()=>{
//         console.log("text copied succesfully")
//     }).catch((err)=>{
//         console.log("Failed to copied text",err)
//     })
// }
// copyTextToclipboard("asldkda");



// 3. CSV String to 2D Array

// Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.

const CSVto2DArray = (csvStr)=>{
    return csvStr.split('\n').map((str)=>str.split(','));
}
// input must be  like this
// a,b\nc,d
const string = "a,b\nc,d";
console.log(CSVto2DArray(string));




