document.write(
  "<h1> Write a program to take a user input about his favorite <br> mobile phone model. Find and display the length of user <br> input in your browser </h1>"
);

var userInput = prompt("Enter Your Favourite Mobile Phone Model");

var lengthOfMobile = userInput.length;

document.write(
  "<h2>Ans: Your Favourite Mobile Phone Model is: " + userInput + "</h2>"
);
document.write("<h2> Length Of String is: " + lengthOfMobile + "</h2>");
