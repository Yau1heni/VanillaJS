const MAX_VALUE = 100
const MIN_VALUE = 0
const ATTEMPTS_NUMBER = 10

function getPlayerName() {
    while (true) {
        const playerName = prompt('Hello friend! What is your name?', '')
        if (playerName.trim() && !Number(playerName)) {
            return playerName
        } else {
            alert('Попробуй еще')
        }
    }
}

const playerName = getPlayerName()

const getRandomNumber = (maxValue) => {
    const randomNumber = Math.floor(Math.random() * maxValue)
    return randomNumber
}

const randomNumber = getRandomNumber(MAX_VALUE)

const game = (minValue, maxValue, attNumber, playerName, randomNumber) => {
    alert(`Привет, ${playerName}!
    Я загадал число в интервале от ${minValue} до ${maxValue}.
    У тебя есть ${attNumber} попыток отгадать его`)

    for (let i = 1; i <= attNumber; i++) {
        const playerAnswer = prompt('Какое число я загадал?', '')
        if (playerAnswer > randomNumber) {
            alert(`Моё число меньше чем ${playerAnswer}
        Попробуй еще, у тебя осталось ${ATTEMPTS_NUMBER - i}`)
        } else if (playerAnswer < randomNumber) {
            alert(`Моё число больше чем ${playerAnswer}
        Попробуй еще, у тебя осталось ${ATTEMPTS_NUMBER - i}`)
        } else {
            alert(`Это победа! Поздравляю! Ты угадал с ${i} попыток`)
            return
        }

    }
    alert(`К сожалению, ты проиграл... Я загадал ${randomNumber}`)
}

game(MIN_VALUE, MAX_VALUE, ATTEMPTS_NUMBER, playerName, randomNumber)