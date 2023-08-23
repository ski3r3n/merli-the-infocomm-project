def on_button_pressed_a():
    basic.show_string("Welcome!")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_string("Enjoy your stay")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    music.set_volume(pins.analog_read_pin(AnalogPin.P1) / 4.02)
basic.forever(on_forever)

def on_forever2():
    music.play(music.string_playable("E F G - - A G - ", 130),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C F F G F E - - ", 130),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C A A B A G - - ", 130),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("F E F E - D C D ", 180),
        music.PlaybackMode.UNTIL_DONE)
basic.forever(on_forever2)

def on_forever3():
    if tinkercademy.PIR(DigitalPin.P8):
        pins.servo_write_pin(AnalogPin.P0, 180)
        basic.pause(700)
        pins.servo_write_pin(AnalogPin.P0, 0)
    basic.pause(2000)
basic.forever(on_forever3)
