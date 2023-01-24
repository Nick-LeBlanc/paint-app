function setup() {
    createCanvas(600, 600);
    background("lightgray")
}

let color = "red"
function draw() {
    noStroke()
    fill("red")
    rect(5, 5, 20, 20);
    fill("orange")
    rect(5, 30, 20, 20);
    fill("yellow")
    rect(5, 55, 20, 20);
    fill("green")
    rect(5, 80, 20, 20);
    fill("Cyan")
    rect(5, 105, 20, 20);
    fill("Blue")
    rect(5, 130, 20, 20);
    fill("Magenta")
    rect(5, 155, 20, 20);
    fill("Brown")
    rect(5, 180, 20, 20);
    fill("White")
    rect(5, 205, 20, 20);
    fill("Black")
    rect(5, 230, 20, 20);

    if(mouseIsPressed){
        if(mouseX >= 5 && mouseX <= 25){
            if(mouseY >=5 && mouseY <= 25){
                color = "red";
                console.log("red");
            }
            if(mouseY >=30 && mouseY <= 55){
                color = "orange";
                console.log("orange")
            }
            if(mouseY >=60 && mouseY <= 85){
                color = "yellow";
                console.log("yellow")
            }
            if(mouseY >=90 && mouseY <= 100){
                color = "green";
                console.log("green")
            }
            if(mouseY >=105 && mouseY <= 125){
                color = "cyan";
                console.log("cyan")
            }
            if(mouseY >=135 && mouseY <= 150){
                color = "blue";
                console.log("blue")
            }
            if(mouseY >=155 && mouseY <= 175){
                color = "magenta";
                console.log("magenta")
            }
            if(mouseY >=180 && mouseY <= 200){
                color = "brown";
                console.log("brown")
            }
            if(mouseY >=205 && mouseY <= 230){
                color = "white";
                console.log("white")
            }
            if(mouseY >=235 && mouseY <= 260){
                color = "black";
                console.log("black")
            }
        }

        strokeWeight(5)
        stroke(color)
        line(mouseX,mouseY,pmouseX, pmouseY)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
