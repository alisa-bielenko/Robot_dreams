function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeLeft = newYear - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("timer").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
  
updateCountdown(); // Call the function once to display initial countdown
setInterval(updateCountdown, 1000); // Update the countdown every second