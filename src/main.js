import string from './doraemon-css.js'

const player = {
  n: 1,
  time: 30,
  id: undefined,
  ui: {
    text: document.querySelector('#text'),
    doraemonStyle: document.querySelector('#doraemonStyle')
  },
  init: ()=>{
    player.play()
    player.bindEvents()
  },
  events:{
    '#btnPlay':'play',
    '#btnPause':'pause',
    '#btnSlow':'slow',
    '#btnNormal':'normal',
    '#btnFast':'fast',
    '#btnReset':'reset'
  },
  bindEvents: ()=>{
    for(let key in player.events){
      if(player.events.hasOwnProperty(key)){
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run: ()=>{
    player.ui.text.innerText = string.substring(0, player.n)
    player.ui.doraemonStyle.innerHTML = string.substring(0, player.n)
    text.scrollTop = text.scrollHeight
    if(player.n >= string.length){
      clearInterval(player.id)
    }
    player.n += 1
  },
  play: ()=>{player.id = setInterval(player.run, player.time)},
  pause: ()=>{clearInterval(player.id)},
  slow: ()=>{
    player.pause()
    player.time = 100
    player.play()
  },
  normal: ()=>{
    player.pause()
    player.time = 30
    player.play()
  },
  fast: ()=>{
    player.pause()
    player.time = 0
    player.play()
  },
  reset: ()=>{
    player.pause()
    player.n = 1
    player.ui.text.innerText = ''
    player.ui.doraemonStyle.innerHTML = ''
  }
}

player.init()