radio.onReceivedValue(function (name, status) {
    if (name == "K1") {
        if (status == 1) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.showNumber(1)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.clearScreen()
        }
    }
    if (name == "K2") {
        if (status == 1) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showNumber(2)
        } else {
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.clearScreen()
        }
    }
})
radio.setGroup(51)
