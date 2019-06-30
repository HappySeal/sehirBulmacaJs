function endScreen() {
  var time = millis();
  var animationTime = 500;
  stroke(100);
  strokeWeight(1);
  textStyle(BOLD);
  fill(255);
  textAlign(CENTER);
  textSize(70);
  text("SÜRE DOLDU",width/2,height*(0.1))
  line(0,height*(0.15),width,height*(0.15))
  textSize(40);
  fill("#1f924f");
  textAlign(RIGHT);
  text("Doğru  sayısı: ",width*(0.35),height*(0.3));
  fill("#ce1616");
  text("Yanlış sayısı: ",width*(0.35),height*(0.4));
  fill("#1648ce");
  text("Toplam : ",width*(0.35),height*(0.5));
}
