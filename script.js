    // Get the next year's January 1st
    let currentYear = new Date().getFullYear();
    let countDownDate = new Date(`Jan 1, ${currentYear + 1} 12:00:00`).getTime();
    let countDownFromDate = new Date(`Jan 1, ${currentYear + 1} 12:00:00`).toDateString();

    let x = setInterval(function () {
      let now = new Date().getTime();
      // Get distance between current date and countdown date
      let distance = countDownDate - now;
      // Calculate days, hours, minutes, and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output countdown from date
      document.getElementById("countdown-from").innerHTML = ` ${countDownFromDate}`;
      // Output timer to HTML
      document.getElementById("root").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // Stop countdown timer when date is reached
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("root").innerHTML = "Happy New Year!";
      }
    }, 1000);