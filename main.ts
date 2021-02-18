input.onButtonPressed(Button.A, function () {
    basic.pause(100)
    _1st_light_value = input.lightLevel()
    basic.showNumber(_1st_light_value)
})
input.onButtonPressed(Button.AB, function () {
    if (_1st_light_value < _2nd_light_value) {
        basic.showNumber(_2nd_light_value - _1st_light_value)
    }
    if (_1st_light_value > _2nd_light_value) {
        basic.showNumber(_1st_light_value - _2nd_light_value)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.pause(100)
    _2nd_light_value = input.lightLevel()
    basic.showNumber(_2nd_light_value)
})
let _2nd_light_value = 0
let _1st_light_value = 0
basic.showNumber(input.lightLevel())
basic.forever(function () {
	
})
