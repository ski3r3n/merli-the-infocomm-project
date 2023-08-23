input.onButtonPressed(Button.A, function () {
    basic.showString("Welcome!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Enjoy your stay")
})
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P8)) {
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(700)
        pins.servoWritePin(AnalogPin.P0, 0)
    }
    basic.pause(2000)
})
basic.forever(function () {
    music.setVolume(pins.analogReadPin(AnalogPin.P1) / 4.02)
})
basic.forever(function () {
    music.play(music.stringPlayable("E F G - - A G - ", 130), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C F F G F E - - ", 130), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C A A B A G - - ", 130), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F E F E - D C D ", 180), music.PlaybackMode.UntilDone)
})
