const array = ['a', 'c', 'f', 'd', 'r', 'd'];
const arrayProcessed = [];
array.sort();
for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i - 1]) {
        delete array[i];
    }
    if (array[i]) {
        arrayProcessed.push(array[i]);
    }
}
console.log(arrayProcessed);

////////////////////////////////////////////////////// 

const arra1 = ['a', 'c', 'f', 'd', 'r', 'e'];
const arra2 = ['a', 'c', 'd', 'r', 'e', 'f'];
// arra1.sort(); 
// arra2.sort(); 
const isEgual = arra1.toString() === arra2.toLocaleString();
console.log(isEgual);

//////////////////////////////////////////////////////
const array3 = ["Peter", "Ann", "Ben", "Jack", "Kate"];
const letter = 'J';
for (let key of array3) {
    if (key[0] == letter) {
        console.log(key);
    }
}

//////////////////////////////////////////////////////
const sentence = "I am learning JavaScript";
const word = "JavaScript";
const sentenceArray = sentence.split(' ');
for (let key of sentenceArray) {
    if (key == word) {
        console.log(sentence);
    }
}