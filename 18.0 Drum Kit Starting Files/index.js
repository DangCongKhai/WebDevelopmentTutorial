// How to play audio sound when it is clicked and when the button is pressed

// Write a function that plays sound



function createAudio(audio_name){
    var audio = new Audio(`sounds/${audio_name}.mp3`)
    audio.play();
}

function addAudio(key){
    switch (key){
        case "w":
            createAudio("crash");
            break;
        case "a":
            createAudio("kick-bass");
            break;
        case "s":
            createAudio("snare");
            break;
        case "d":
            createAudio("tom-1");
            break;
        case "j":
            createAudio("tom-2");
            break;
        case "k":
            createAudio("tom-3");
            break;
        case "l":
            createAudio("tom-4");
            break;
        default:
            // console.log(key);
            createAudio("tom-4");
    }
}
    
let drums_list = document.querySelectorAll(".drum")

for (let i = 0; i < drums_list.length; i++){
    drums_list[i].addEventListener('click', function() {
        let key = drums_list[i].innerHTML;
        addAudio(key);
    })
    drums_list[i].addEventListener('click', function() {
      let key = drums_list[i].innerHTML;
      console.log(key);
      buttonAnimation(key);
    })
}
document.addEventListener('keydown', e => {
    addAudio(e.key);
    buttonAnimation(e.key)
})



function buttonAnimation(currentKey){
    let pressed_button = document.querySelector(`.${currentKey}`);
    pressed_button.classList.add("pressed")
    setTimeout(() => {
      pressed_button.classList.remove("pressed")
    }, 1);
}

