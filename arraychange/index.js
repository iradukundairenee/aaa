const compareIndexes = (originalIndex, updatedIndex) => {
    const newElements = updatedIndex.filter(element => !originalIndex.includes(element));
    
    const removedElements = originalIndex.filter(element => !updatedIndex.includes(element));

    return [newElements, removedElements];
}

const originalIndex = [1, 2, 3, 5];
const updatedIndex = [1, 2, 4, 6];

const [newElements, removedElements] = compareIndexes(originalIndex, updatedIndex);

console.log("New elements", newElements);
console.log("Removed elements", removedElements);
