## Export / Import Constant
// Create a file constants.js in the root folder.
// In that file, add the following code:
// below that, write the code that would export the variable timezone from the file.
// Use the "default" version of the export.
// Create an index.js file in the root folder.
// In the index.js file, import the constant that is exported from constants.js and log its value.
// Test that it logs Indochina
// Then submit here the entire content of the constants.js and index.js files.

// const timezone = 'Indochina';
// export default timezone;


// Export / Import Object
// Open constants.js and add the code below
// From the same file, export both constants in a single object format (not default).
// Open index.js and import both constants at the same time, using destructuring.
// Within index.js log each of the two constants to the console, it should log:
// 3.14
// 6.28
// Commit and push
// Paste here and submit the content of both files

///////////////////////////
## Export Import Functions
// Create a math folder in the root folder of the repo
// Within the math folder, create a functions.js file
// In the functions.js file create a function calcCircleArea that takes a radius r and a Pi pi, then returns the area of a circle.
// Export the function from the file.
// Open index.js and import the function.
// Use the value of pi imported earlier from constants.js and the numbers listed in the tests below as the two parameters to run the function calcCircleArea and test in the console that your results are the same as the ones in the tests below.
// Commit and push
// Paste the entire content of the functions.js and index.js files here and submit.
// Tests:

## Install Lodash
Within your project, install the lodash package
Check that the files have been added to the node_modules folder and that lodash is now listed in package.json
Practice uninstalling the package once, then install it again
Commit and push

## Use Lodash
Visit https://lodash.com/docs/4.17.15 and read about some of the methods available in Lodash
In the index.js file, import the lodash package (or just some of its methods) and use it to experiment with arrays
Add node_modules to the .gitignore file
Commit and push
Paste the entire content of the index.js file here and submit (this will help your team lead guide you)

## Use Axios
Install the axios package
Import it in the index.js file
Use axios to get data from the url "https://jsonplaceholder.typicode.com/todos/1" as you did earlier in the online simulator
Test that you're receiving data (log it)
Commit and push
Paste the entire content of the index.js file here and submit (this will help your team lead guide you)