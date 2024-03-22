let currentTempF = 70; // Initial temperature in Fahrenheit
let currentTempC = fahrenheitToCelsius(currentTempF);
let desiredTempF = 72; // Initial desired temperature in Fahrenheit
let desiredTempC = fahrenheitToCelsius(desiredTempF);
let isFahrenheit = true;

const currentTempElement = document.getElementById('currentTemp');
const statusMessageElement = document.getElementById('statusMessage');
const desiredTempElement = document.getElementById('desiredTemp');
const increaseTempButton = document.getElementById('increaseTemp');
const decreaseTempButton = document.getElementById('decreaseTemp');
const unitToggleButton = document.getElementById('unitToggle');

function updateDisplay() {
    currentTempElement.textContent = `${isFahrenheit ? currentTempF : Math.round(currentTempC)}°`;
    desiredTempElement.textContent = `${isFahrenheit ? desiredTempF : Math.round(desiredTempC)}°`;
    statusMessageElement.textContent = getStatusMessage();
}

function getStatusMessage() {
    if (isFahrenheit) {
        if (currentTempF < desiredTempF) {
            return 'Heating up';
        } else if (currentTempF > desiredTempF) {
            return 'Cooling off';
        } else {
            return 'Temperature is just right';
        }
    } else {
        if (currentTempC < desiredTempC) {
            return 'Heating up';
        } else if (currentTempC > desiredTempC) {
            return 'Cooling off';
        } else {
            return 'Temperature is just right';
        }
    }
}

function resetTemperatures() {
    currentTempF = 70;
    currentTempC = fahrenheitToCelsius(currentTempF);
    desiredTempF = 72;
    desiredTempC = fahrenheitToCelsius(desiredTempF);
}

function toggleUnits() {
    isFahrenheit = !isFahrenheit;
    unitToggleButton.textContent = isFahrenheit ? 'Fahrenheit' : 'Celsius';
    resetTemperatures();
    updateDisplay();
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function increaseTemp() {
    desiredTempF++;
    desiredTempC = fahrenheitToCelsius(desiredTempF);
    updateDisplay();
}

function decreaseTemp() {
    desiredTempF--;
    desiredTempC = fahrenheitToCelsius(desiredTempF);
    updateDisplay();
}

// Initial display update
updateDisplay();

// Event listeners
increaseTempButton.addEventListener('click', increaseTemp);
decreaseTempButton.addEventListener('click', decreaseTemp);
unitToggleButton.addEventListener('click', toggleUnits);
