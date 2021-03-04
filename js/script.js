/* The Video atomatic start and stop when scrolling */
var blooper = document.getElementById("myVideo");
document.addEventListener("scroll", function myFunction(){
    if (blooper.getBoundingClientRect().bottom < 250 || blooper.getBoundingClientRect().top > 250)
        blooper.pause();
    else
        blooper.play();
});

/* shows opening hours on the day*/

var today = new Date();
var weekdays = new Array(7);
var greeting = "";

weekdays[0] = "Vi leverer fra på torsdag kl 17";
weekdays[1] = "Vi leverer fra på torsdag kl 17";
weekdays[2] = "Vi leverer fra på torsdag kl 17";
weekdays[3] = "Vi leverer fra på torsdag kl 17";
weekdays[4] = "Vi leverer i dag fra 17-02";
weekdays[5] = "Vi leverer i dag fra 17-02";
weekdays[6] = "Vi leverer i dag fra 17-02";


    document.getElementById("demo").innerHTML = weekdays[today.getDay()];

/* Click on element to new piture */ 
function toggleElementVisibility(idOfElement) {

    let elementToToggle = document.getElementById(idOfElement);

    if(elementToToggle.style.display === 'block') {
        elementToToggle.style.display = 'none';
    }
    else {
        elementToToggle.style.display = 'block';
    }
}