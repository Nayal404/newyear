function myFunc() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
let newYear = new Date("Apr 14, 2022 00:00:00").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = newYear - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("infin").innerHTML = days + " Days " +", "+ hours + " Hours " +" , "+ minutes + " Minutes , " + seconds + " Seconds ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("infin").innerHTML = "HAPPY NEW YEAR 2079 BS"+" May This New Year Brings joy in your family:)";
  }
}, 1000);
