function showGameName(tile) {
    tile.getElementsByClassName("game-name")[0].style.transform = "translateY(0)";
}

function hideGameName(tile) {
    tile.getElementsByClassName("game-name")[0].style.transform = "translateY(100%)";
}
document.getElementById('tutorialButton').addEventListener('click', function() {
    // You can add code here to load tutorials dynamically if needed
    // For now, we're just showing the modal
  });
