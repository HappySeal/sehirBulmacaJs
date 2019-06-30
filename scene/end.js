function endScreen() {
  var animationTime = 500;
  stroke(100);
  strokeWeight(1);
  fill(31);
  rect(0,0,width,height*(0.15))
  textStyle(BOLD);
  fill(255);
  textAlign(CENTER);
  textSize(70);
  text("SÜRE DOLDU",width/2,height*(0.1))
  textSize(40);
  fill("#1f924f");
  textAlign(RIGHT);
  if(millis()-time > animationTime){
    text("Doğru  sayısı: ",width*(0.35),height*(0.3));
    text(score[0],width*(0.4),height*(0.3));
  }
  fill("#ce1616");
  if(millis()-time > 2*animationTime ){
    text("Yanlış sayısı: ",width*(0.35),height*(0.4));
    text(score[1],width*(0.4),height*(0.4));
  }
  fill("#1648ce");
  if(millis()-time > 3*animationTime){
    text("Toplam : ",width*(0.35),height*(0.5));
    text(score[0]-score[1],width*(0.4),height*(0.5));
  }

}
