/* 
1) Random hexValue ga ega ranglarni for loop oraqli tanlab olish
2) Random burchak tanlab olish 360 darja ichida
3) 
*/

const btn = document.querySelector('.btn')
const lineGrad = document.querySelector('.lineGrad')
const playMusic = document.querySelector('.playMusic')

btn.addEventListener('click', () => {
  loder()
})

function loder() {
  const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ]
  const mixer = () => {
    let adder = ''
    for (let i = 0; i < 6; i++) {
      let random = Math.round(Math.random() * 15)
      let valueRandom = values[random]
      adder += valueRandom
    }
    return adder
  }

  const mixer1 = mixer()
  const mixer2 = mixer()
  const randomDeg = Math.floor(Math.random() * 361)
  const linearGrad = `linear-gradient(${randomDeg}deg, #${mixer1} , #${mixer2})`
  lineGrad.innerText = linearGrad
  document.body.style.background = linearGrad
}

let play = false
let audio = new Audio('Ring.mp3')
playMusic.addEventListener('click', () => {
  if (!play) {
    audio.play()
  } else if (play) {
    audio.pause()
  }

  play = !play
})

loder()
