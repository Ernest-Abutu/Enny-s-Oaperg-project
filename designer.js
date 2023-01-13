const countDate = new Date("Jan 7 2024 14:30:55").getTime();

var x = setInterval(function(){
    let now = new Date().getTime();

    let distance = countDate - now;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) /(1000 * 60));
    var sec = Math.floor((distance % (1000 * 60 * 60) / 1000));

    document.getElementById("timer").innerHTML = d + "days: " + hrs + "hrs: " + min + "min: " + sec + "sec ";

    if(distance < 0){
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Time's Up";
    }
})