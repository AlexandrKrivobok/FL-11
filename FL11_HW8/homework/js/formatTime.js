function formatTime(num) {
    let daysAmmount = parseInt(num / 1440);
    let hoursAmmount = parseInt((num - 1440 * daysAmmount) / 60);
    let minutesAmmount = num - (1440 * daysAmmount) - (60 * hoursAmmount);
    return `${daysAmmount} day(s), ${hoursAmmount} hour(s), ${minutesAmmount} minute(s)`
}

console.log(formatTime(15012));