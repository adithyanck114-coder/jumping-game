const character = document.getElementById("character");
const block = document.getElementById("block");
const jumpSound = document.getElementById("jumpSound");

function jump() {
    // Prevent spamming jump while already jumping
    if (character.classList != "animate") {
        character.classList.add("animate");
        
        // Play the voice/sound effect
        jumpSound.currentTime = 0; // Rewind to start
        jumpSound.play();

        // Remove animation class after it finishes so it can jump again
        setTimeout(function () {
            character.classList.remove("animate");
        }, 400);
    }
}

// Game over logic (Collision detection)
let checkCollision = setInterval(function () {
    let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    let blockRight = parseInt(window.getComputedStyle(block).getPropertyValue("right"));

    // Check if block is near the character and character is on the ground
    if (blockRight > 340 && blockRight < 380 && characterBottom <= 35) {
        block.style.animation = "none";
        alert("Game Over! Tap OK to restart.");
        block.style.animation = "blockMove 1.5s infinite linear";
    }
}, 10);
