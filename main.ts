input.onButtonPressed(Button.A, function () {
    NUMERO += 1
    basic.showNumber(NUMERO)
})
input.onButtonPressed(Button.B, function () {
    NUMERO += -1
    basic.showNumber(NUMERO)
})
let NUMERO = 0
NUMERO = 0
basic.showNumber(NUMERO)
basic.forever(function () {
    if (input.compassHeading() > 315 || input.compassHeading() < 45) {
        basic.showArrow(ArrowNames.North)
    }
    if (input.compassHeading() > 45 && input.compassHeading() < 135) {
        basic.showArrow(ArrowNames.West)
    }
    if (input.compassHeading() > 135 && input.compassHeading() < 225) {
        basic.showArrow(ArrowNames.South)
    }
    if (input.compassHeading() > 225 && input.compassHeading() < 315) {
        basic.showArrow(ArrowNames.East)
    }
})
