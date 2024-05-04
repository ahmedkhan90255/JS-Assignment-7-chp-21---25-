document.write(
  "<h1> Write a program to take password as an input from user. The password must qualify these requirements: <br> a. It should contain alphabets and numbers <br> b. It should not start with a number <br> c. It must at least 6 characters long <br> If the password does not meet above requirements, <br> prompt the user to enter a valid password. <br> For character codes of a-z, A-Z & 0-9, refer to ASCII <br> table at the end of this document </h1>"
);

function isValidPassword(password) {
  // Check if password contains alphabets and numbers
  const containsAlphabets = /[a-zA-Z]/.test(password);
  const containsNumbers = /[0-9]/.test(password);

  // Check if password starts with a letter
  const startsWithLetter = /^[a-zA-Z]/.test(password);

  // Check if password is at least 6 characters long
  const isLengthValid = password.length >= 6;

  // Return true if all requirements are met
  return (
    containsAlphabets && containsNumbers && startsWithLetter && isLengthValid
  );
}

function getPasswordInput() {
  let password = prompt("Enter your password:");

  while (!isValidPassword(password)) {
    password = prompt(
      "Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long:"
    );
  }

  return password;
}

const userPassword = getPasswordInput();
document.write("<h2>Password: ", userPassword + "</h2>");
