radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.clearScreen()
        Feu_rouge()
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            . # . . #
            # # # # #
            . # . # .
            # . . . #
            `)
    } else if (receivedNumber == 1) {
        Feu_orange()
    } else if (receivedNumber == 2) {
        basic.clearScreen()
        Feu_vert()
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # . # #
            # # # # .
            . # . # #
            . . . . .
            `)
    } else {
        Eteindre_tout()
        basic.clearScreen()
        Clignotant()
        Eteindre_tout()
    }
})
function Feu_orange () {
    Eteindre_tout()
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function Clignotant () {
    Eteindre_tout()
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(750)
    Eteindre_tout()
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(500)
}
function Feu_vert () {
    Eteindre_tout()
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function Feu_rouge () {
    Eteindre_tout()
    pins.digitalWritePin(DigitalPin.P0, 1)
}
function Eteindre_tout () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
radio.setGroup(1)
