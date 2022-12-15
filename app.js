
// Get Modal
var modal = document.getElementById("modal");

// Get button that opens modal
var btn = document.getElementById("modal-button");

// Open modal when button is clicked
btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
