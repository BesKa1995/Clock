
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]



toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerText = 'Dark mode'
  } else {
    html.classList.add('dark')
    e.target.innerText = 'Light mode'
  }
})


setTime()

function setTime() {
  const time = new Date()
  const hour = time.getHours() % 12
  const minute = time.getMinutes()
  const second = time.getSeconds()
  const day = time.getDay()
  const month = time.getMonth()
  const date = time.getDate()
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM'

  secondEl.style.transform = `translate(-50%, -100%) rotate(${getAngleOfNeedle(60, second)})`

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${getAngleOfNeedle(60, minute)})`
  hourEl.style.transform = `translate(-50%, -100%) rotate(${getAngleOfNeedle(12, hour)})`


  timeEl.innerHTML = `${hour}:${minute < 10 ? `0${minute}` : minute} ${ampm}`
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

function getAngleOfNeedle(degreeDevider, time) {
  return `${time === 0 ? 360 : (360 / degreeDevider) * time}deg`
}
setInterval(setTime, 1000)