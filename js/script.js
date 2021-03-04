var blooper = document.getElementById("myVideo");
document.addEventListener("scroll", function myFunction(){
    if (blooper.getBoundingClientRect().bottom < 250 || blooper.getBoundingClientRect().top > 250)
        blooper.pause();
    else
        blooper.play();
});

var today = new Date();
var weekdays = new Array(7);
var minutesNow = today.getMinutes();
var hoursNow = today.getHours();
var greeting = "";

weekdays[0] = "Vi leverer fra på torsdag kl 17";
weekdays[1] = "Vi leverer fra på torsdag kl 17";
weekdays[2] = "Vi leverer fra på torsdag kl 17";
weekdays[3] = "Vi leverer fra på torsdag kl 17";
weekdays[4] = "Vi leverer i dag fra 17-02";
weekdays[5] = "Vi leverer i dag fra 17-02";
weekdays[6] = "Vi leverer i dag fra 17-02";


if(weekdays >= 0 && weekdays <=3)
    greeting = "God!";
else if(weekdays >= 4 && weekdays <=6)
    greeting = "God hat!";



    document.getElementById("demo").innerHTML = weekdays[today.getDay()];

function toggleElementVisibility(idOfElement) {

    let elementToToggle = document.getElementById(idOfElement);

    if(elementToToggle.style.display === 'block') {
        elementToToggle.style.display = 'none';
    }
    else {
        elementToToggle.style.display = 'block';
    }
}