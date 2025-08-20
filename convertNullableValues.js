// Nullable conversion
// you are given an object with properties that may c
// ontain null or undefined values. Your task is to implement a
//  function called convertNullableValues that checks if any of the 
// properties in the object contains null or undefined. If a property is 
// null convert it to zero and if a property is undefined convert it to an empty 
// string. Return the modified object.

const convertNullableValues = (obj) => {
    for(let key in obj) {
        if(obj[key] == null) {
            return 0;
        } else if (obj[key] == undefined) {
            return '';
        } else {
            return obj[key];
        }
    }
}
