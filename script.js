// Gets all the drum buttons
const buttons = document.querySelectorAll(".drum");

// Plays the sound that matches the key
function playSound(key) {

    const audio = document.getElementById(key);

    // Checks if the audio exists
    if (audio) {

        // Restarts the sound from the beginning
        audio.currentTime = 0;

        // Plays the sound
        audio.play();
    }
}

// Plays a sound when a drum button is clicked
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const key = button.dataset.key;
        playSound(key);

    });
});

// Plays a sound when a keyboard key is pressed
document.addEventListener("keydown", function(event) {

    // Converts uppercase keys to lowercase
    const key = event.key.toLowerCase();

    playSound(key);

});