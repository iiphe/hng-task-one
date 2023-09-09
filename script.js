document.addEventListener("DOMContentLoaded", function () {

   
    // Get the current date
    const currentDate = new Date();
    
    // Array to map weekdays
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Update current day of the week
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = daysOfWeek[currentDate.getUTCDay()];
    
    // Update current UTC time
    function updateUTCTime() {
        const currentDate = new Date();
        const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
        
        // Get the UTC time in milliseconds and format it
        const utcTimeMilliseconds = currentDate.getTime();
        const formattedUTCDate = new Date(utcTimeMilliseconds).toUTCString();

        currentUTCTimeElement.textContent = `Current UTC Time & Date: ${formattedUTCDate} `;

        // Schedule the function to run again in 1 second (1000 milliseconds)
        setTimeout(updateUTCTime, 1000);
    }

    // Initial call to start updating the time
    updateUTCTime();

});
