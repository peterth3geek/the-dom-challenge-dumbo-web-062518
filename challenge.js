
const loveObj = {}

let interval = setInterval(incrementer, 1000)
// let messageArr = []
// const ul = document.createElement('ul')

const form = document.querySelector('#comment-form')

form.addEventListener('submit', () => {event.preventDefault()})

const up = document.querySelector('#up')
const down = document.querySelector('#down')
const lovebtn = document.querySelector('#love')
const pausebtn = document.querySelector('#pause')
const submit = document.querySelector('#submit')

up.onclick = incrementer
down.onclick = decrementer
lovebtn.onclick = love
pausebtn.onclick = pause
submit.onclick = messages

function changeText(element, value){
  document.querySelector(element).innerText = value
}

function incrementer(){
  let counter = parseInt(document.querySelector('#counter').innerText)
    ++counter
    if (!loveObj[counter]){
        loveObj[counter] = 0
    }
    changeText('#counter', counter)
    changeText('.likes', `Likes: ${loveObj[counter]}`)
}
function decrementer(){
  let counter = parseInt(document.querySelector('#counter').innerText)

    --counter
    if (!loveObj[counter]){
        loveObj[counter] = 0
    }
    changeText('#counter', counter)
    changeText('.likes', `Likes: ${loveObj[counter]}`)

}


function pause(){
  if(pausebtn.innerText === 'pause'){
    clearInterval(interval)
    changeText('#pause', 'resume')
    up.disabled = 'disabled'
    down.disabled = 'disabled'
    lovebtn.disabled = 'disabled'
    submit.disabled = 'disabled'

  }
  else{
    changeText('#pause', 'pause')
    up.removeAttribute('disabled')
    down.removeAttribute('disabled')
    lovebtn.removeAttribute('disabled')
    submit.removeAttribute('disabled')

    interval = setInterval(incrementer, 1000)
  }
}

function love (){
let counter = parseInt(document.querySelector('#counter').innerText)

  if (loveObj[counter]){
      ++loveObj[counter]
      changeText('.likes', `Likes: ${loveObj[counter]}`)


  }
  else{
    loveObj[counter] = 1
    changeText('.likes', `Likes: ${loveObj[counter]}`)

  }
}

function messages(){
  const commentSection = document.querySelector('.comments')
  const li = document.createElement('li')

  li.innerText = document.querySelector('input').value

  commentSection.append(li)
}
