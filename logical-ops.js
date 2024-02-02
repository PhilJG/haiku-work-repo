function countVowels(arr) {
    let vowelLength = 0
    for (let el of arr) {
        if(el === "a" || el === "e" || el === "i" || el === "o" || el === "u" ) {
            vowelLength = vowelLength + 1
        }        
    }
    console.log(vowelLength);
    
    return vowelLength
}