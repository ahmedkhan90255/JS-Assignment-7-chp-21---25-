document.write(
  "<h1>You have an array <br>A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] <br>Write a program to enable “search by user input” in an <br>array. After searching, prompt the user whether the given <br>item is found in the list or not.<br>Note: Perform case insensitive search. Whether the user <br> enters cookie, Cookie, COOKIE or coOkIE, program <br>should inform about its availability"
);

const A = ["cake", "apple pie", "cookie", "chips", "patties"];

function searchItem(item) {
  // Convert user input and array items to lowercase for case-insensitive search
  const lowerCaseItem = item.toLowerCase();
  const lowerCaseArray = A.map((item) => item.toLowerCase());

  // Perform search
  const index = lowerCaseArray.indexOf(lowerCaseItem);

  // Inform user about availability
  if (index !== -1) {
    document.write(`<h2>"${A[index]}" is found in the list.</h2>`);
  } else {
    document.write(`<h2>"${item}" is not found in the list.</h2>`);
  }
}

// Get user input
const userInput = prompt("Enter the item you want to search:");

// Perform search
searchItem(userInput);
