let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
let item = 0
let color = 0
let seznam = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Orange),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Violet),
neopixel.colors(NeoPixelColors.Purple),
neopixel.colors(NeoPixelColors.White),
neopixel.colors(NeoPixelColors.Black)
]
basic.forever(function () {
    strip.setPixelColor(item, seznam[color])
    strip.show()
    basic.pause(500)
    strip.clear()
    if (item == 7) {
        item = 0
        color += 1
        if (color == 10) {
            color = 0
        }
    } else {
        item += 1
    }
})
