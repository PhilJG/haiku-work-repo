function displayMessage(x) {
   let message
    if (x) {
        message = 'Hello, this is a scope problem!'
        return message

    } else  {
        message = 'Hello'
        return message
    }
}