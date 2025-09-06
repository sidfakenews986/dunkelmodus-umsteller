let darkModeActive = false;

function toggleDarkMode() {
    const body = document.body;
    if (darkModeActive) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
    darkModeActive = !darkModeActive;
    saveUserPreference();
}

function saveUserPreference() {
    localStorage.setItem('darkModeActive', JSON.stringify(darkModeActive));
}

function loadUserPreference() {
    const preference = localStorage.getItem('darkModeActive');
    if (preference !== null) {
        darkModeActive = JSON.parse(preference);
        if (darkModeActive) {
            document.body.classList.add('dark-mode');
        }
    }
}

window.onload = loadUserPreference;