console.log("Problem Solving");

// 1. Compare Objects for Equivalent Properties

// Write a JavaScript program to compare two objects to determine if the first 
// contains equivalent property values to the second one.

// LINE BY Line solution 
const findSame = (objA,objB)=>{
    const obj2Keys = Object.keys(objB)
    const checkAllKeysInSameInObj1 = obj2Keys.every((key)=> key in objA)
    const checkAllValueInSameInObj1 = obj2Keys.every((keys)=>objA[keys]== objB[keys])
    const isSame = checkAllKeysInSameInObj1 && checkAllValueInSameInObj1;
    return `the first contains equivalent property values to the second one : ${isSame}`;
}

console.log(findSame({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(findSame({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(findSame({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false



// One Line Solution 

const isFindSame = (objA,ObjB)=>{
    // isMatch = Object.keys(ObjB).every((keys)=>keys in objA && objA[keys] == ObjB[keys]);
    // OR 
    isMatch = Object.keys(ObjB).every((keys)=> objA.hasOwnProperty(keys) && objA[keys] == ObjB[keys]);
    return `the first contains equivalent property values to the second one : ${isMatch}`;
    
}
console.log(isFindSame({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(isFindSame({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(isFindSame({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false

// ==============================================================================================================


