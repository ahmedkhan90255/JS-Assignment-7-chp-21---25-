document.write(
  "<h1> Write a program to convert the following string to an <br>array using string split method.<br>var university = “University of Karachi”;<br>Display the elements of array in your browser </h1>"
);

var university = "University of Karachi";

var universityArray = university.split("");

document.write("<h3>University Array:</h3>");
document.write("<ul>");
for (var i = 0; i < universityArray.length; i++) {
  document.write("<li>" + universityArray[i] + "</li>");
}
document.write("</ul>");
