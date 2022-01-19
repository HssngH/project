var randomNumber1 = Math.floor(Math.random()*6+1);

var imgNum1 = "images/dice"+randomNumber1+".png";

var randomNumber2 = Math.floor(Math.random()*6+1);

var imgNum2 = "images/dice"+randomNumber2+".png";

document.getElementsByTagName("img")[0].setAttribute("src",imgNum1);

document.getElementsByTagName("img")[1].setAttribute("src",imgNum2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerText = "Player1 Win!❤";
  } else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerText = "❤Player2 Win!";
  } else {
    document.querySelector("h1").innerText = "Draw";
  }
