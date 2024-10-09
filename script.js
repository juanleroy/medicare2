
document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons inside the container
    const buttons = document.querySelectorAll(".container button");

    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove the 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));
            
            // Add the 'active' class to the clicked button
            this.classList.add("active");
        });
    });
});

        // Variable to hold the currently playing audio object
        let currentAudio = null;

        function playAudio(file) {
            // If there is already an audio playing, pause and reset it
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            // Create a new audio object and set it as the current audio
            currentAudio = new Audio(file);
            currentAudio.play();
        }

        function stopAudio() {
            // If there is an audio playing, pause it and reset the time
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
        }