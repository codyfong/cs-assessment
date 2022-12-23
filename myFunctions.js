//1
function addToZero(array){ 
    let arrayStatus = false
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[i] !== array[j]){
                if (array[i] + array[j] === 0){
                    arrayStatus = true
                }
            }
        }
    }
    return arrayStatus
}
//Runtime is O(n^2)
//Space complexity is O(1)
console.log('addtoZero ', addToZero([1, 2, 3, -2]))
//===================================================================

//2
function hasUniqueChars(word){
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}
//Runtime is O(n)
//Space complexity is O(n)
console.log('hasUniqueChars ', hasUniqueChars("Moonday"))
//===================================================================

//3
function isPangram(sentence){
    let letters = new Set([])
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].match(/[a-z]/i)){
            letters.add(sentence[i].toLowerCase())
        }
    }
    return letters.size === 26
}
//Runtime is O(n)
//Space complexity is O(n)
console.log('isPangram ', isPangram("The quick brown fox jumps over the lazy dog!"))
//===================================================================

//4
function findLongestWord(words){
    let longestLength = words[0].length
    let longestIndex = 0
    words.forEach((word, i) => {
        if (word.length > longestLength){
            longestLength = word.length
            longestIndex = i
        }
    })
    return words[longestIndex]
}
//Runtime is O(n)
//Space complexity is O(1)
console.log('findLongestWord ', findLongestWord(["hi", "hello"]))
