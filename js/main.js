// Initial Data
const pomodoroWork = document.querySelector('.pomodoroWork')  
const optionShortPause = document.querySelector('.pomodoroPauseShort') 
const optionLongPause = document.querySelector('.pomodoroPauseLong')

const playTimer = document.querySelector('.playTimer')
const stopTimer = document.querySelector('.stopTimer')
const resetTimer = document.querySelector('.resetTimer')

const pomodoroShow = document.querySelector('.pomodoro-show')
const playSons = document.querySelector('.playSons')

const body = document.querySelector('body')
const timerColor = document.querySelector('.timer')

const headerLogin = document.querySelector('.header-login')

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
    viewBackgroundColor( splitName )
}

const updateCountdown = () => {
    secondsTotal --
    let minutes = parseInt(secondsTotal / 60)
    let seconds =  secondsTotal % 60
    viewCountdown( minutes, seconds )

    if(secondsTotal == 00) {
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

const viewBackgroundColor = (color) => {
    body.style.transition = `1s`
    body.style.backgroundColor = `${color[0]}`
    timerColor.style.backgroundColor = `${color[1]}`
}


//Events

playTimer.addEventListener('click', playTimerEvent = () => {
    countInterval = setInterval(updateCountdown,1000)
    console.log('play')
    playSons.loop = false
    
    playTimer.disabled = true
    stopTimer.disabled = false
    
})

stopTimer.addEventListener('click', stopTimerEvent = () => {
    clearInterval(countInterval)
    console.log('stop')
    playSons.loop = false

    playTimer.disabled = false
    stopTimer.disabled = true
})

resetTimer.addEventListener('click', resetTimerEvent = () => {
    clearInterval(countInterval)
    console.log('reset')
    playSons.loop = false
    init(selectPomodoro)

    playTimer.disabled = false
    stopTimer.disabled = false
})

pomodoroWork.addEventListener('click', function() {
    selectPomodoro = 0
    resetTimerEvent()
})

optionShortPause.addEventListener('click', function() {
    selectPomodoro = 1
    resetTimerEvent()
})

optionLongPause.addEventListener('click', function() {
    selectPomodoro = 2
    resetTimerEvent() 
})


headerLogin.addEventListener('click', () => {
    const url = 'http://127.0.0.1:5500/pages/login.html'
    const openLogin = window.location.href = url
})
// Form User
init(selectPomodoro)

















