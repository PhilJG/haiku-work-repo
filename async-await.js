//////////////////
// Make it Async
// Turn the following into an "async" function:

// const add = async (a, b) => a + b

//////////////////////
// Wait for it
// The function getMessages reads data from a different server. Write the correct code so that the function waits for it before continuing.



const search = () => {
        async function getMessages(){
            let messages = await getMessages()
            return messages
    }
}