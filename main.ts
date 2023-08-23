input.onButtonPressed(Button.A, function () {
    basic.showString("Welcome!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Enjoy your stay")
})
basic.forever(function () {
    music.play(music.stringPlayable("E F G - - A G - ", 130), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C F F G F E - C ", 130), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A A B A G - F E ", 130), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F E - D C D - - ", 180), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- - - - - - - - ", 444), music.PlaybackMode.UntilDone)
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
