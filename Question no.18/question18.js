document.write("<h1> You have a string “The quick brown fox jumps over the <br> lazy dog”. Write a program to count number of <br> occurrences of word “the” in given string </h1>")


var sentence = "The quick brown fox jumps over the lazy dog";
var wordToCount = "the";


var lowercaseSentence = sentence.toLowerCase();
var lowercaseWordToCount = wordToCount.toLowerCase();


var words = lowercaseSentence.split(" ");


var count = 0;


for (var i = 0; i < words.length; i++) {
    if (words[i] === lowercaseWordToCount) {
        count++;
    }
}


document.write("<h2>Ans: Number of occurrences of '" + wordToCount + "': " + count + "</h2>");