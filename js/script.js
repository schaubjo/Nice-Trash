document.addEventListener('DOMContentLoaded', function () {
    // Your existing JavaScript code

    // Initialize ScrollMagic controller
    var controller = new ScrollMagic.Controller();

    // Add ScrollMagic scenes for each card
    document.querySelectorAll('.card').forEach(function (card, index) {
        var scene = new ScrollMagic.Scene({
            triggerElement: card,
            triggerHook: 0.8, // Adjust as needed
            reverse: false
        })
            .setClassToggle(card, 'fade-in') // Add a CSS class for the fade-in effect
            .addTo(controller);

        // Optionally, add indicators for debugging (remove in production)
        // scene.addIndicators();
    });
});

// Add hover effect to the description box
document.getElementById('description-box').addEventListener('click', function () {
    this.classList.toggle('enlarged');
});