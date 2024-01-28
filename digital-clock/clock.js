window.addEventListener('load', calculateTime);

function calculateTime() {
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hour >= 12 ? 'pm' : 'am';
    var dayName = ["SUN", 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    // Adjust hour if it's greater than 12
    hour = hour % 12;
    hour = hour ? hour : 12; // If hour is 0, make it 12
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    document.getElementById("day").innerHTML = dayName[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("ampm").innerHTML = ampm;
}

// Update the time every 100 milliseconds
setInterval(calculateTime, 100);
