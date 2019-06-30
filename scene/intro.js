
function introScreen() {
  background(0);
  fill(200);
  textSize(70);
  stroke(100,50);
  strokeWeight(2);
  textAlign(CENTER,CENTER);
  text("ŞEHİR BULMACA",width/2,height*(0.25));
  imageMode(CENTER,CENTER)
  image(icon,width/4,height*(0.25),32*cos(millis()/500),32);
  image(icon,width*3/4,height*(0.25),32*cos(millis()/500),32);
  textSize(30);
  image(button[1][1],width/2,height*(0.60),400,height*(0.10));
  image(button[0][1],width/2,height*(0.75),400,height*(0.10));
  text("Başla",width/2,height*(0.60));
  text("Oyun değiştir",width/2,height*(0.75));
  imageMode(CORNER);
}
