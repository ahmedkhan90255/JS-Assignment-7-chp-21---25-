document.write("<h1>Write a program to take user input and store username <br> in a variable. If the username contains any special symbol <br> among [@ . , !], prompt the user to enter a valid username.</h1>")

var userName = +prompt("Enter Your Username")

if (userName === "@" || userName === "!" || userName === "," || userName === "."){
    alert("Invalid Username")
} else {
    alert("Thank You!")
}