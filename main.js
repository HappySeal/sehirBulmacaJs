const cheerio = require('cheerio');
let page = cheerio.load("http://gmscoreboard.com/handle_score.php?tagid=5d4f09c4e525b15654609322539&getscore=10");
console.log(page);
var city = [['Edirne',''],[ 'Kırklareli',''],[ 'Tekirdağ',''],[ 'İstanbul',''],[ 'Kocaeli',''],[ 'Yalova',''],[ 'Sakarya',''],[ 'Düzce',''],[ 'Zonguldak',''],[ 'Bartın',''],[ 'Kastamonu',''],[ 'Sinop',''],[ 'Samsun',''],[ 'Ordu',''],[ 'Giresun',''],[ 'Trabzon',''],[ 'Rize',''],[ 'Artvin',''],[ 'Ardahan',''],[ 'Erzurum',''],[ 'Bayburt',''],[ 'Gümüşhane',''],[ 'Sivas',''],[ 'Tokat',''],[ 'Amasya',''],[ 'Çorum',''],[ 'Çankırı',''],[ 'Bolu',''],[ 'Bilecik',''],[ 'Balıkesir',''],[ 'Çanakkale',''],[ 'İzmir',''],[ 'Manisa',''],[ 'Kütahya',''],[ 'Eskişehir',''],[ 'Ankara',''],[ 'Kırıkkale',''],[ 'Yozgat',''],[ 'Erzincan',''],[ 'Kars',''],[ 'Ağrı',''],[ 'Iğdır',''],[ 'Van',''],[ 'Hakkari',''],[ 'Şirnak',''],[ 'Siirt',''],[ 'Bitlis',''],[ 'Muş',''],[ 'Bingöl',''],[ 'Diyarbakır',''],[ 'Mardin',''],[ 'Şanlıurfa',''],[ 'Adıyaman',''],[ 'Elazığ',''],[ 'Tunceli',''],[ 'Malatya',''],[ 'Kahramanmaraş',''],[ 'Gaziantep',''],[ 'Batman',''],[ 'Kayseri',''],[ 'Adana',''],[ 'Osmaniye',''],[ 'Hatay',''],[ 'Nevşehir',''],[ 'Niğde',''],[ 'Mersin',''],[ 'Karaman',''],[ 'Konya',''],[ 'Aksaray',''],[ 'Kilis',''],[ 'Antalya',''],[ 'Isparta',''],[ 'Afyonkarahisar',''],[ 'Uşak',''],[ 'Denizli',''],[ 'Muğla',''],[ 'Aydin',''],[ 'Bursa',''],[ 'Kırşehir',''],[ 'Karabük',''],[ 'Burdur','']];

var score = [0,0];

var time,trueAnswer,mode,icon;
var n = 0;
var hiScore = 0;
var button = [["",null],["",null],["",null],["",null]];
var secenekler = [];
var timeTotal = 90;

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

function setup(){
  createCanvas(window.screen.availWidth,window.screen.availHeight-78);
  scale(width/1366);
  mode = 0;
}

function draw(){
  if(mode == 0)introScreen();
  if(mode == 1)gameScreen();
  if(mode == 2)endScreen();
}
function mousePressed(){
  if(mode == 1){
    for(var i = 0;i<button.length;i++){
      if(buttonMouse((i%2)*width/2,width/2,height*(0.8)+(i>1)*height*(0.1),height*(0.1),true)){
        if(i == trueAnswer[1]){
          score[0]=score[0]+1;
          cityChoose();
        }else{
          score[1]=score[1]+1;
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
  if(keyCode < 53 && keyCode > 48 && mode == 1){
    if(keyCode-49 == trueAnswer[1]){
      score[0]=score[0]+1;
      cityChoose();
    }else{
      score[1]=score[1]+1;
      cityChoose();
    }
  }
}
