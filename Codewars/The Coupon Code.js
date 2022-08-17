function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    let a = new Date(currentDate)
    let b = new Date(expirationDate)
    return enteredCode === correctCode && a <= b
}