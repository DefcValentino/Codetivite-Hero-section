
window.addEventListener('keydown', function(e){
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`key[data-key="${e.keyCode}"]`)

    console.log(audio);
    if(!audio) return; // stop the function from running all together//
    audio.currentTime = 0; // Rewind to the start
    console.log(key);
    audio.play();
    key.classList.add('playing');
    
})