//////////////////
// Make it Async
// Turn the following into an "async" function:

// const add = async (a, b) => a + b

//////////////////////
// Wait for it
// The function getMessages reads data from a different server. Write the correct code so that the function waits for it before continuing.



// const search = () => {
//         async function getMessages(){
//             let messages = await getMessages()
//             return messages
//     }
// }

////////////////////////////
// Fix the function
// The following function is wrong, fix it.

// const filterArray = async ()  => {
//   let data = await getData()
//   return data
// }

//////////////////////////////////
// Collect the error
// The function getResults() returns an error. Collect the error and log it in the console.

// const search = async () => {
//   try {
//       await getResults()
//   } catch (err) {
//     console.log(`Try harder ${err}`);
//   }
// }

// search()

///////////////////////
// Collect any error
// One of the 2 functions getResults() and getPages() returns an error. You don't know which one. Collect any of the 2 errors and log them in the console.

// const search = async () => {
//     try {
//         let results = await getResults()
//     } catch (error) {
//         console.log('Error getting results', error);
//     }

//     try {
//         let pages = await getPages()
//     } catch (error){
//         console.log('Error getting pages', error);
//     }
// }

// console.log(search());

// Get ToDo
// Create an async function getTodo that:

// receives a parameter number
// uses axios to make a request to the url https://jsonplaceholder.typicode.com/todos/1 replacing the last 1 with the parameter function
// returns the data of the response object
// Test your code on the Simulation Platform.

const getTodo = async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return response.data
}

// Test the following:
console.log(

    getTodo(1), // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
    getTodo(2), // { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false }
    getTodo(3), // { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }
    )
    
    ``