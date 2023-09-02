function preload() {
    img1 = loadImage("bedroom.jpg")
    img2 = loadImage("tvac.jpg")
    img3 = loadImage("image84734.jpg")
    img4 = loadImage("coke.jpg")
    img5 = loadImage("FYF-870.webp")
}
function setup() {
    canvas = createCanvas(620.893, 423.456)
    canvas.center()
}
function draw() 
    s = document.getElementById("id").value
    if (s == "bedroom") {
        img = img1
    }
    if (s == "TV_AC") {
        img = img2

    } if (s == "desk") {
        img = img3

    } if (s == "bottles") {
        img = img4

    } if (s == "fruitbasket") {
        img = img5


    image(img, 0, 0, 620.893, 423.456)
    fill("#4169e1")
    text("Dog", 45, 75)
    noFill()
    stroke("#4169e1")
    rect(30, 60, 450, 350)

}
