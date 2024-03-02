// Create a variable called sentence
let sentence = "The movie is not that bad, I like it";

// Create a variable called wordNot to store the position of the substring "not"
let wordNot = sentence.indexOf("not");

// Create a variable called wordBad to store the position of the substring "bad"
let wordBad = sentence.indexOf("bad");

// Check if "not" appears before "bad" and if both words exist in the sentence
if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
    // Replace the whole "not...bad" substring with "good"
    let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    // Log the new sentence
    console.log(newSentence);
} else {
    // If "bad" does not come after "not" or the words are not in the sentence, log the original sentence
    console.log(sentence);
}
