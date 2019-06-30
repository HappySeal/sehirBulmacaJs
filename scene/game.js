
function cityChoose(){
  var answers = [];
  trueAnswer = [random(city),round(random(0,3))];
  for(var i = 0;i<4;i++){
    if(i == trueAnswer[1]){
      answers[i] = trueAnswer[0];
    }else{
      var tempCity = random(city);
      while(answers.includes(tempCity) || tempCity == trueAnswer[0]){
        tempCity = random(city);
      }
      answers[i] = tempCity;
    }
  }
  push();
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(20);
  translate(0,height*(0.8));
  for(var i =0;i<button.length;i++){
    image(button[i][1],(i%2)*width/2,(i>1)*height*(0.1),width/2,height*(0.1));
    noStroke();
    text(answers[i][0],(i%2)*width/2+(width/4),(i>1)*height*(0.1)+(height*(0.05)))
  }
  pop();
  image(trueAnswer[0][1],0,0,width,height*(0.8));
  textSize(20);
  fill(0);
  text("Puan: "+(score[0]-score[1]),width*(0.9),50);
}


function gameScreen() {
  stroke(224);
  strokeWeight(10);
  text("Sure: 0"+floor((timeTotal-floor((millis()-time)/1000))/60)+"."+(timeTotal-floor((millis()-time)/1000))%60,width*(0.9),25)
  if(timeTotal-((millis()-time)/1000) < 0){
    time = millis();
    mode = 2;
  }
}
