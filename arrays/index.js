
const findModifications=(originalArray,updatedArray)=>{
    const newElements = updatedArray.filter(element => !originalArray.includes(element));
    const removedElements = originalArray.filter(element => !updatedArray.includes(element));
    return [newElements, removedElements];
}

const originalArray =[1,2,3,5]
const updatedArray =[1,2,4,6]

const result = findModifications(originalArray,updatedArray );
console.log(result)
