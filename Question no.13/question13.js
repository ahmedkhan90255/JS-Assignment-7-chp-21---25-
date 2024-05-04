document.write(
  "<h1>Write a program to take user input and store username <br> in a variable. If the username contains any special symbol <br> among [@ . , !], prompt the user to enter a valid username.</h1>"
);

function isValidUsername(username) {
    for (let i = 0; i < username.length; i++) {
        const charCode = username.charCodeAt(i);
        if (charCode === 64 || charCode === 46 || charCode === 44 || charCode === 33) {
            return false; // Contains a special symbol
        }
    }
    return true; // Username is valid
}

function getUserInput() {
    let username = prompt("Enter your username:");

    while (!isValidUsername(username)) {
        username = prompt("Please enter a valid username (without special symbols like @, ., ,, !):");
    }

    return username;
}

const user = getUserInput();
document.write("<h2> Username: ", user + "</h2>");



