// Handle running text with motivational quotes and time
const quotes = [
    "Selalu semangat dalam berkarya!",
    "Kreativitas adalah kunci sukses.",
    "Belajar setiap hari adalah investasi terbaik.",
    "Kegagalan adalah awal dari kesuksesan."
];
let index = 0;

const runningTextElem = document.getElementById('runningText');
function displayRunningText() {
    if (index >= quotes.length) {
        const now = new Date();
        runningTextElem.innerText = now.toLocaleTimeString();
    } else {
        runningTextElem.innerText = quotes[index];
        index++;
    }
}
setInterval(displayRunningText, 4000); // Change text every 4 seconds

// Redirect to 404 page if URL is invalid
const checkPageValidity = () => {
    const validPages = ['index.html', 'project1.html', 'project2.html', '404.html'];
    const currentPage = window.location.pathname.split('/').pop();

    if (!validPages.includes(currentPage)) {
        window.location.href = '404.html';
    }
};
window.addEventListener("load", checkPageValidity);
