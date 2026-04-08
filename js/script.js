document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if(menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
});

function showMessage(message, type) {
    let msgDiv = document.createElement('div');
    msgDiv.className = 'message ' + type;
    msgDiv.textContent = message;
    document.body.appendChild(msgDiv);
    setTimeout(function() {
        msgDiv.remove();
    }, 3000);
}