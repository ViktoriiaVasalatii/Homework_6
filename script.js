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
// for(let i of ); 
// function arrayUnique(arra1){
const arra1 = ['a', 'c', 'f', 'd', 'r', 'd'];
const arra2 = ['a', 'c', 's', 'd', 'r', 'e'];
for (let i = 0; i < arra1.length; i++) {
    for (let j = 0; j < arra2.length; j++) {
        if (arra1.length == arra2.length) {
            if (arra1[i] == arra2[j]) {
                console.log("true");
            }
            else {
                console.log("Error 2")
            }
        }
        else {
            console.log("Error 1 ");
        }
    }
}
// return a; 
// }
// const tempDates = ['a', 'c', 'f', 'd', 'r', 'd'];
// const arr = ['a', 'c', 's', 'd', 'r', 'e'];
// for (var i = 0; i < tempDates.length; i++) {
//     for (var j = 0; j < arr.length; j++) {

        // if(tempDates.length == arr.length) {
        //     return true;
        // } else if (tempDates.length !== arr.length) {
        //     if(tempDates[i] !== arr[j]){
        //         tempDates.push(j);
        //     }
        // }
//     }
// }
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