canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
rover_height = 100;
rover_width = 100;

backround_img = "mars.jpg";
rover_img = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    backround_img_tag = new Image();
    backround_img_tag.onload = uploadbackround;
    backround_img_tag.src = backround_img;

    rover_img_tag = new Image();
    rover_img_tag.onload = uploadrover;
    rover_img_tag.src = rover_img;
}
function uploadBackround() {
    ctx.drawImage(backround_img_tag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_img_tag, rover_width, rover_height, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown); function my_keydown(e) { keyPressed = e.keyCode; console.log(keyPressed); if (keyPressed == '38') { up(); console.log("up"); } if (keyPressed == '40') { down(); console.log("down"); } if (keyPressed == '37') { left(); console.log("left"); } if (keyPressed == '39') { right(); console.log("right"); } }
function up() { if (rover_y >= 0) { rover_y = rover_y - 10; console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y); uploadBackground(); uploadrover(); } } function down() { if (rover_y <= 510) { rover_y = rover_y + 10; console.log("When down arrow is pressed, x = " + rover_x + " | y = " + rover_y); uploadBackground(); uploadrover(); } } function left() { if (rover_x >= 0) { rover_x = rover_x - 10; console.log("When left arrow is pressed, x = " + rover_x + " | y = " + rover_y); uploadBackground(); uploadrover(); } } function right() { if (rover_x <= 700) { rover_x = rover_x + 10; console.log("When right arrow is pressed, x = " + rover_x + " | y = " + rover_y); uploadBackground(); uploadrover(); } }
