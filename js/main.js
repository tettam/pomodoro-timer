// Initial Data
const optionWork = document.querySelector('.pomodoroWork')  
const optionShortPause = document.querySelector('.pomodoroPauseShort') 
const optionLongPause = document.querySelector('.pomodoroPauseLong')

const playTimer = document.querySelector('.playTimer')
const stopTimer = document.querySelector('.stopTimer')
const resetTimer = document.querySelector('.resetTimer')

const pomodoroShow = document.querySelector('.pomodoro-show')
const playSons = document.querySelector('.playSons')

let selectPomodoro = 0
let countInterval
let secondsTotal

const chooseTimer = [
    { id : 1, title : 'Work', minutes : 25, color : '#117DBF,#116ebfd8' },
    { id : 2, title : 'Short Pause', minutes : 5, color : '#400812,#ba829625'},
    { id : 3, title : 'Long Pause', minutes : 15, color : '#08080D,#49496870' }
]

function init(selectPomodoro) {
    optionsSelect(selectPomodoro)
    updateCountdown()
}

const optionsSelect = (index) => {
    const minutes = chooseTimer[index].minutes
    minutesOption = minutes
    secondsTotal = minutesOption * 60

    const color = chooseTimer[index].color
    const colorOptions =  color

    const splitName = colorOptions.split(',')
}

const updateCountdown = () => {
    secondsTotal --
    let minutes = parseInt(secondsTotal / 60)
    let seconds =  secondsTotal % 60
    viewCountdown( minutes, seconds )

    if(seconds == 00) {
        playSons.loop = true
        playSons.play()
        clearInterval(countInterval)
        init(selectPomodoro)
    }
}

const viewCountdown = ( minutes,seconds ) => {
    console.log(minutes)
    minutes < 10 ? minutes = `0${minutes}` : minutes
    seconds < 10 ?  seconds = `0${seconds}` : seconds
    pomodoroShow.textContent = `${minutes}:${seconds}`
}


playTimer.addEventListener('click', function() {
    countInterval = setInterval(updateCountdown,1000)
    console.log('play')
})

stopTimer.addEventListener('click', function() {
    clearInterval(countInterval)
    console.log('stop')
    playSons.loop = false
})

resetTimer.addEventListener('click', function() {
    clearInterval(countInterval)
    console.log('reset')
    playSons.loop = false
    init(selectPomodoro)
})



init(selectPomodoro)

















