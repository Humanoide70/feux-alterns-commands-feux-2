def on_received_number(receivedNumber):
    if receivedNumber == 0:
        Feu_rouge()
    elif receivedNumber == 1:
        Feu_orange()
    elif receivedNumber == 2:
        Feu_vert()
radio.on_received_number(on_received_number)

def Feu_orange():
    Eteindre_tout()
    basic.pause(100)
    pins.digital_write_pin(DigitalPin.P1, 1)
def Feu_vert():
    Eteindre_tout()
    basic.pause(100)
    pins.digital_write_pin(DigitalPin.P2, 1)
def Feu_rouge():
    Eteindre_tout()
    basic.pause(100)
    pins.digital_write_pin(DigitalPin.P0, 1)
def Eteindre_tout():
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
radio.set_group(1)