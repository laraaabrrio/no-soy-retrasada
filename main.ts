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
