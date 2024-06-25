document.getElementById('accept').addEventListener('click', function() {
    alert('Yay! She said yes!');
});

document.getElementById('decline').addEventListener('mouseover', function() {
    let button = this;
    let moveDistance = 150; // distance in pixels
    let edgeMargin = 50; // margin from the edges

    let rect = button.getBoundingClientRect();

    // Calculate new position
    let newTop = rect.top + (Math.random() * moveDistance * 2 - moveDistance);
    let newLeft = rect.left + (Math.random() * moveDistance * 2 - moveDistance);

    // Ensure new position is within bounds
    if (newTop < edgeMargin) {
        newTop = edgeMargin;
    } else if (newTop > (window.innerHeight - button.offsetHeight - edgeMargin)) {
        newTop = window.innerHeight - button.offsetHeight - edgeMargin;
    }

    if (newLeft < edgeMargin) {
        newLeft = edgeMargin;
    } else if (newLeft > (window.innerWidth - button.offsetWidth - edgeMargin)) {
        newLeft = window.innerWidth - button.offsetWidth - edgeMargin;
    }

    button.style.top = newTop + 'px';
    button.style.left = newLeft + 'px';

    // Ensure button position is absolute
    button.style.position = 'absolute';
});

document.getElementById('decline').addEventListener('click', function() {
    let modal = document.getElementById('modal');
    modal.style.display = 'block';
});

document.getElementById('close').addEventListener('click', function() {
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
    location.reload(); // Reload the page
});

// Close the modal when clicking outside of it
window.onclick = function(event) {
    let modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
        location.reload(); // Reload the page
    }
};
