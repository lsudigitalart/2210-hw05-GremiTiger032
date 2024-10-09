function setup() {
    createCanvas(600, 400);
    background(100000);
   
}

function draw() {

    scale(1)
    stroke(51);
    translate(25);

    for(var i=5; i < 1000; i = i + 15){

   
    ellipse(280, 200, 500)
    ellipse(280, 200, 400)
    ellipse(280, 200, 300)
    ellipse(280, 200, 200)
    ellipse(280, 200, 100)
    ellipse(280, 200, 50)
    ellipse(280, 200, 20)
    ellipse(i, 220, 12, 465);

    ellipse(0, 0, 150)
    ellipse(0, 0, 100)
    ellipse(0, 0, 50)

    ellipse(560, 0, 150)
    ellipse(560, 0, 100)
    ellipse(560, 0, 50)

    ellipse(0, 395, 150)
    ellipse(0, 395, 100)
    ellipse(0, 395, 50)

    ellipse(560, 395, 150)
    ellipse(560, 395, 100)
    ellipse(560, 395, 50)
    
   

   




}

       

}
