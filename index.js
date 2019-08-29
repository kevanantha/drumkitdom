const drums = document.querySelectorAll('.drum')

for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener('click', function() {
    const button = this.innerHTML
    makeSound(button)
    activeButton(button)
  })
}

document.addEventListener('keypress', function(e) {
  makeSound(e.key)
  activeButton(e.key)
})

const makeSound = key => {
  if (key == 'w') {
    const tom1 = new Audio('sounds/tom-1.mp3')
    tom1.play()
  }
  if (key == 'a') {
    const tom2 = new Audio('sounds/tom-2.mp3')
    tom2.play()
  }
  if (key == 's') {
    const tom3 = new Audio('sounds/tom-3.mp3')
    tom3.play()
  }
  if (key == 'd') {
    const tom4 = new Audio('sounds/tom-4.mp3')
    tom4.play()
  }
  if (key == 'j') {
    const crash = new Audio('sounds/crash.mp3')
    crash.play()
  }
  if (key == 'k') {
    const kick = new Audio('sounds/kick-bass.mp3')
    kick.play()
  }
  if (key == 'l') {
    const snare = new Audio('sounds/snare.mp3')
    snare.play()
  }
}

const activeButton = key => {
  const el = document.querySelector(`.${key}`)
  el.classList.add('pressed')

  setTimeout(() => {
    el.classList.remove('pressed')
  }, 100)
}
