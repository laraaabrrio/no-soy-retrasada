input.onButtonPressed(Button.A, function () {
    x += 1
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(x * 10 / y)
    radio.sendString("lara")
    radio.setGroup(1)
    y = 0
    x = 0
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    led.plot(parseFloat(receivedString.substr(0, 1)), parseFloat(receivedString.substr(1, 1)))
})
input.onButtonPressed(Button.B, function () {
    y += 1
})
let y = 0
let x = 0
radio.setGroup(1)
x = 0
y = 0
