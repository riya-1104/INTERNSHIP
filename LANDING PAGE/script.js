document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const eventDate = new Date('[2025-09-25T18:00:00]').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = 'The event has started!';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div>${days} <span>Days</span></div>
            <div>${hours} <span>Hours</span></div>
            <div>${minutes} <span>Minutes</span></div>
            <div>${seconds} <span>Seconds</span></div>
        `;
    };

    setInterval(updateCountdown, 1000);
});