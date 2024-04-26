document.write("<h1>Write a program to display the last character of a user input</h1>")

var userInput = prompt("Enter anything I will diplay you the last character")

if (userInput !== null && userInput !== "") {
    var result = userInput.charAt(userInput.length - 1)
    document.write ("<h2>Ans:The last character of your word/sentence is: " + result + "</h2>")
} else {
    alert ("Invalid Input")
}