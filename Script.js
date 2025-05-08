document.addEventListener('DOMContentLoaded', function() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // Defina a data do seu encontro!  **MUDE A DATA AQUI**
    const dataEncontro = new Date('2025-06-28T09:30:00'); // 

    function updateCountdown() {
        const now = new Date();
        const difference = dataEncontro.getTime() - now.getTime();

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        daysElement.innerText = days;
        hoursElement.innerText = hours;
        minutesElement.innerText = minutes;
        secondsElement.innerText = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});