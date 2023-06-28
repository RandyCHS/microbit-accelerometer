let acc_x = 0
let acc_y = 0
let isEast = false
let isWest = false
let isNorth = false
let isSouth = false
basic.forever(function () {
    acc_x = input.acceleration(Dimension.X)
    acc_y = input.acceleration(Dimension.Y)
    isEast = acc_x > 90
    isWest = acc_x < -90
    isNorth = acc_y < -90
    isSouth = acc_y > 90
    if (isEast && isNorth) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (isEast && isSouth) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (isWest && isNorth) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (isWest && isSouth) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (isEast) {
        basic.showArrow(ArrowNames.East)
    } else if (isNorth) {
        basic.showArrow(ArrowNames.North)
    } else if (isSouth) {
        basic.showArrow(ArrowNames.South)
    } else if (isWest) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
