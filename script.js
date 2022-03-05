// this '//' represent the stages

// get all keys

const keys = document.querySelectorAll(".key")


// play notes
function playNote(event) {
    // keyCode
  let audioKeyCode = getKeyCode(event);
    // typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)


    // if key exists
    const cantFindAnyKey = !key

    if(cantFindAnyKey) {
        return;
    }

    // play audio
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
    
}

function getKeyCode(event) {
    let keyCode;
  
    const isKeyboard = event.type === "keydown"
    if(isKeyboard) {
      keyCode = event.keyCode
    } else {
      keyCode = event.target.dataset.key
    }
  
    return keyCode
  }


// click with mouse
keys.forEach(function(key) {
    key.addEventListener("click", playNote)
})

// keyboard type
window.addEventListener("keydown", playNote)