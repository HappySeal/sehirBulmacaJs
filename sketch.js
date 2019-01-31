var city = [['Edirne',''],[ 'Kırklareli',''],[ 'Tekirdağ',''],[ 'İstanbul',''],[ 'Kocaeli',''],[ 'Yalova',''],[ 'Sakarya',''],[ 'Düzce',''],[ 'Zonguldak',''],[ 'Bartın',''],[ 'Kastamonu',''],[ 'Sinop',''],[ 'Samsun',''],[ 'Ordu',''],[ 'Giresun',''],[ 'Trabzon',''],[ 'Rize',''],[ 'Artvin',''],[ 'Ardahan',''],[ 'Erzurum',''],[ 'Bayburt',''],[ 'Gümüşhane',''],[ 'Sivas',''],[ 'Tokat',''],[ 'Amasya',''],[ 'Çorum',''],[ 'Çankırı',''],[ 'Bolu',''],[ 'Bilecik',''],[ 'Balıkesir',''],[ 'Çanakkale',''],[ 'İzmir',''],[ 'Manisa',''],[ 'Kütahya',''],[ 'Eskişehir',''],[ 'Ankara',''],[ 'Kırıkkale',''],[ 'Yozgat',''],[ 'Erzincan',''],[ 'Kars',''],[ 'Ağrı',''],[ 'Iğdır',''],[ 'Van',''],[ 'Hakkari',''],[ 'Şirnak',''],[ 'Siirt',''],[ 'Bitlis',''],[ 'Muş',''],[ 'Bingöl',''],[ 'Diyarbakır',''],[ 'Mardin',''],[ 'Şanlıurfa',''],[ 'Adıyaman',''],[ 'Elazığ',''],[ 'Tunceli',''],[ 'Malatya',''],[ 'Kahramanmaraş',''],[ 'Gaziantep',''],[ 'Batman',''],[ 'Kayseri',''],[ 'Adana',''],[ 'Osmaniye',''],[ 'Hatay',''],[ 'Nevşehir',''],[ 'Niğde',''],[ 'Mersin',''],[ 'Karaman',''],[ 'Konya',''],[ 'Aksaray',''],[ 'Kilis',''],[ 'Antalya',''],[ 'Isparta',''],[ 'Afyonkarahisar',''],[ 'Uşak',''],[ 'Denizli',''],[ 'Muğla',''],[ 'Aydin',''],[ 'Bursa',''],[ 'Kırşehir',''],[ 'Karabük',''],[ 'Burdur','']];

var time,score,trueAnswer,mode,icon;
var n = 0;
var button = [["",null],["",null],["",null],["",null]];
var secenekler = [];


function preload(){
  for(var i = 0;i<city.length;i++){
    city[i][1] = loadImage('static/images/city/'+(i+1)+'.png');
  }
  for(var i =0;i<4;i++){
    button[i][1] = loadImage('static/images/buttons/b'+(i+1)+'.png');
  }
  icon = loadImage('static/images/iconGray.png');
}

var buttonMouse = function(xa,wa,ya,ha,press) {
  return ((mouseX >xa && mouseX<xa+wa)&&(mouseY>ya && mouseY<ya+ha)&&(mousePressed||!press));
}

var buttonMouseCenter = function(xa,wa,ya,ha,press) {
  return ((mouseX >xa-wa/2 && mouseX<xa+wa/2)&&(mouseY>ya-ha/2 && mouseY<ya+ha/2)&&(mousePressed||!press));
}

function gameScreen() {
  stroke(224);
  strokeWeight(10);
  text("Sure: "+floor((120-floor((millis()-time)/1000))/60)+"."+(120-floor((millis()-time)/1000))%60,width*(0.9),25)
}
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

function setup(){
  score = 0;
  createCanvas(window.screen.availWidth,window.screen.availHeight-78);
  scale(width/1366);
  mode = 0;
}

function cityChoose(){
  var answers = [];
  trueAnswer = [random(city),round(random(0,3))];
  for(var i = 0;i<4;i++){
    if(i == trueAnswer[1]){
      answers[i] = trueAnswer[0];
    }else{
      var tempCity = random(city);
      while(answers.includes(tempCity)){
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
  text("Puan: "+score,width*(0.9),50);
}

function draw(){
  if(mode == 0)introScreen();
  if(mode == 1)gameScreen();
}
function mousePressed(){
  if(mode == 1){
    for(var i = 0;i<button.length;i++){
      if(buttonMouse((i%2)*width/2,width/2,height*(0.8)+(i>1)*height*(0.1),height*(0.1),true)){
        if(i == trueAnswer[1]){
          console.log("True bitch!");
          score++;
          cityChoose();
        }else{
          console.log("wtf modafuka?");
          score--;
          cityChoose();
        }
      }
    }

  }
  if(mode == 0){
    for(var i = 0;i<2;i++){
      if(buttonMouseCenter(width/2,400,(i==0)*(height*(0.6))+(i==1)*(height*(0.75)),height*(0.1))){
        if(i == 0){mode = 1;time = millis();cityChoose();}
        if(i == 1){alert("I cant but in future")}
      }
    }
  }
}
function keyPressed() {
  if(keyCode < 53 && keyCode > 48){
    if(keyCode-49 == trueAnswer[1]){
      console.log("True bitch!");
      score++;
      cityChoose();
    }else{
      console.log("wtf modafuka?");
      score--;
      cityChoose();
    }
  }
}
