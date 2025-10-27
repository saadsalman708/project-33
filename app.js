function moveLeft() {

    var left = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    left -= 100;
    if (left > -100) {
        car.style.left = left + "px";
    }
}





function moveRight() {

    var left = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    left += 100;
    if (left < 300) {
        car.style.left = left + "px";
    }
}





document.addEventListener("keydown", event => {

    if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") { moveLeft() };
    if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") { moveRight() };
});





// its for first opps div

var counter;
var opps = document.getElementById("opps");
var previous = -1;
var random;
opps.addEventListener('animationiteration', () => {

    do {
        counter++;
        random = Math.floor(Math.random() * 3) * 100;
    } while (random === previous); // re-roll if same as last

    previous = random;
    opps.style.left = random + "px";
});



// its for Second opps div a.k.a opp2

var opps2 = document.getElementById("opps2");
if (window.getComputedStyle(opps2).display != "none") {

    opps.addEventListener('animationiteration', () => {

        do {
            random = Math.floor(Math.random() * 3) * 100;
        } while (random === previous); // re-roll if same as last

        previous = random;
        opps2.style.left = random + "px";
    });
}



// if i use these one i dont have to re-write code again and again but these one does not gives good results. you know users wants thrill

// setupObstacle(document.getElementById("opps"));
// setupObstacle(document.getElementById("opps2"));
// var previous = -1; 
// function setupObstacle(obstacle) {

//     obstacle.addEventListener("animationiteration", () => {
//     var random;

//     do {
//         random = Math.floor(Math.random() * 3) * 100;
//     } while (random === previous); // re-roll if same as last

//     previous = random;
//     opps2.style.left = random + "px";
// });
// }





var checking = setInterval(function () {


    if (window.getComputedStyle(opps2).display !== "none") {
        var oppsLeft2 = parseInt(window.getComputedStyle(opps2).getPropertyValue("left"));
        var oppsMarg2 = parseInt(window.getComputedStyle(opps2).getPropertyValue("margin-top"));
    }

    var oppsLeft = parseInt(window.getComputedStyle(opps).getPropertyValue("left"));
    var oppsMarg = parseInt(window.getComputedStyle(opps).getPropertyValue("margin-top"));
    var carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    var dvhToPx = window.innerHeight / 100; // 1dvh in pixels
    var targetMargin = Math.floor(70 * dvhToPx);

    if ((oppsLeft === carLeft || oppsLeft2 === carLeft) && (oppsMarg > targetMargin || oppsMarg2 > targetMargin)) {

        opps.style.animation = "none";
        opps2.style.animation = "none";
        clearInterval(checking)
    }
}, 100);