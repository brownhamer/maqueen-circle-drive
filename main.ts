let prevRightSensor = 0
let prevLeftSensor = 0
let rightSensor = -1
let leftSensor = -1
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
basic.forever(function () {
    prevLeftSensor = leftSensor
    prevRightSensor = rightSensor
    rightSensor = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    leftSensor = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    if (leftSensor == 1) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        if (prevLeftSensor == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
        }
    } else {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        if (prevLeftSensor == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        }
    }
    if (rightSensor == 1) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        if (prevRightSensor == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        }
    } else {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        if (prevRightSensor == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        }
    }
})
