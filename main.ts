input.onButtonPressed(Button.A, function () {
    basic.showString("Welcome to SG")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Enjoy your stay")
})
basic.forever(function () {
    music.setVolume(pins.analogReadPin(AnalogPin.P1) / 4.02)
})
basic.forever(function () {
    music.play(music.stringPlayable("E F G - A G - C ", 160), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F F G F E - C A ", 160), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A B A G - F E F ", 160), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E D C E D - E F ", 160), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G A G C F F G F ", 160), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E - C A A E B B ", 160), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 C5 - B A - A B ", 160), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 C5 A B C5 C5 - - ", 160), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P8)) {
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(700)
        pins.servoWritePin(AnalogPin.P0, 0)
    }
    basic.pause(2000)
})
