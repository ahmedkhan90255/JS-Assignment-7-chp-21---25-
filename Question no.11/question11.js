document.write("<h1> Write a program that takes user input. Convert and <br> show the input in title case.</h1>")

function toTitleCase(text) {
    return text.toLowerCase().split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
  
  // Function to prompt user for input
  function getUserInput() {
    return prompt('Enter a text to convert to title case:');
  }
  
  // Main function
  function main() {
    // Get user input
    var userInput = getUserInput();
  
    // Check if user input is not null
    if (userInput !== null) {
      // Convert input to title case
      var titleCaseText = toTitleCase(userInput);
  
      // Display the result
      console.log('Title Case:', titleCaseText);
    } else {
      alert('No input provided.');
    }
  }
  
  // Call the main function
  main();