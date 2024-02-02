function calculateDiscount(price, category) {
    let discount
    if (category === 'electronics') {
        discount = price * 0.10
        console.log(category, discount)
    } else {
        discount = price * 0.05
        console.log(category, discount);
        
    }
    return discount
}

calculateDiscount(10, 'electronics')
calculateDiscount(10, 'food')

