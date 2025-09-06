let dunkelmodusAktiv = false;

function toggleDarkMode() {
    const body = document.body;
    if (dunkelmodusAktiv) {
        body.classList.remove('dunkelmodus');
    } else {
        body.classList.add('dunkelmodus');
    }
    dunkelmodusAktiv = !dunkelmodusAktiv;
    saveUserPreference();
}

function saveUserPreference() {
    localStorage.setItem('dunkelmodusAktiv', dunkelmodusAktiv);
}

function loadUserPreference() {
    const preference = localStorage.getItem('dunkelmodusAktiv');
    if (preference !== null) {
        dunkelmodusAktiv = (preference === 'true');
        if (dunkelmodusAktiv) {
            document.body.classList.add('dunkelmodus');
        }
    }
}

window.onload = loadUserPreference;