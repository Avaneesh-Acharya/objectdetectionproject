var S=""
function preload() {
    img1 = loadImage("bedroom.jpeg")
    img2 = loadImage("tvac.jpeg")
    img3 = loadImage("image84734.jpeg")
    img4 = loadImage("coke.jpeg")
    img5 = loadImage("FYF-870.webp")
}
function setup() {
    canvas = createCanvas(620.893, 423.456)
    canvas.center()
}
function draw() {
   var S = document.getElementById("bedroom").textContent
    console.log(S)
    if (S == "bedroom") {
        img = img1
    }
    if (S == "TV_AC") {
        img = img2

    } if (S == "desk") {
        img = img3

    } if (S == "bottles") {
        img = img4

    } if (S == "fruitbasket") {
        img = img5

    }
    image(img, 0, 0, 620.893, 423.456)
    fill("#4169e1")
    text("Dog", 45, 75)
    noFill()
    stroke("#4169e1")
    rect(30, 60, 450, 350)

}
