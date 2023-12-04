document.addEventListener('DOMContentLoaded', function () {

    var controller = new ScrollMagic.Controller();

    // ScrollMagic for cards
    document.querySelectorAll('.card').forEach(function (card, index) {
        var scene = new ScrollMagic.Scene({
            triggerElement: card,
            triggerHook: 0.8,
            reverse: false
        })
            .setClassToggle(card, 'fade-in')
            .addTo(controller);


    });
});

// Add hover effect to the description box
document.getElementById('description-box').addEventListener('click', function () {
    this.classList.toggle('enlarged');
});
