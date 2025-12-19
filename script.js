const textDisplay = document.getElementById('textDisplay');
const toggleBtn = document.getElementById('toggleBtn');
let isOn = false;

toggleBtn.addEventListener('click', function() {
    isOn = !isOn;
    
    if (isOn) {
        textDisplay.textContent = 'ON';
        textDisplay.style.color = '#2ecc71';
    } else {
        textDisplay.textContent = 'OFF';
        textDisplay.style.color = '#ecf0f1';
    }
});