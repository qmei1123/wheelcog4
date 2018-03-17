function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
    frameRate(.75);
}

function draw() { 
    background(255,255,237);
    //line following mouse
    

    
    for (i = 0; i < width - 140; i+=65) {
        for (j = 0; j < height - 140; j+=70) {

            //custom shape 
            beginShape();
            noFill();
            stroke(209,209,246);

            let vertices = map(mouseX, 0, width, 5, 50);

            for(let a = 0; a < 360; a += vertices) {
                let x = 20 * sin(a) + 180;
                let y = 20 * cos(a) + 180;
                vertex (x + random(i-10, i) - 120, y + random(j-10, j) - 120);
            }
            endShape(CLOSE);
            
            beginShape();
            noFill;
            stroke(47,103,221);
            strokeWeight(2);
            let verticesTwo = map(mouseY, 0, height, 3, 50);

            for(let b = 0; b < 360; b += verticesTwo) {
                let x2 = 50 * cos(b) + 180;
                let y2 = 60 * sin(b) + 180;
                vertex (x2 + random(i-10,i) - 90, y2 + random(j) - 90);
            }
            endShape(CLOSE);
        }
    }
}