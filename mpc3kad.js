$(document).ready(function() {
    console.log("Script loaded"); // Check if the script runs

    let currentAudio = null; // Variable to keep track of the currently playing audio

    $(".trigger").on("click", function() {
        // Get the audio URL and text from data attributes
        var audioUrl = $(this).data("audio");
        var textToDisplay = $(this).data("text");

        // Update the text in the screen div
        $("#screen").text(textToDisplay);

        // Stop the currently playing audio if there is one
        if (currentAudio) {
            currentAudio.pause(); // Pause the current audio
            currentAudio.currentTime = 0; // Reset time to the beginning
        }

        // Create a new audio element and play the new audio
        currentAudio = new Audio(audioUrl);
        currentAudio.play().catch(function(error) {
            console.error("Playback failed:", error);
        });
    });
});
