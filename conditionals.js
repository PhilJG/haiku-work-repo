function checkLottery(ticketNumber, winningTicket) {
    let message 
    if (ticketNumber === winningTicket){
        message = "Winner"
    } else {
        message = "Loser"
    }
    return message
}