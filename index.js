var generateRandom1=Math.random();
var randomNumber1=Math.floor(generateRandom1 * 6)+1;
if(randomNumber1===1){
    document.querySelector(".img1").setAttribute("src","./dice1.png");
}else if(randomNumber1===2){
    document.querySelector(".img1").setAttribute("src","./dice2.png");
}else if(randomNumber1===3){
    document.querySelector(".img1").setAttribute("src","./dice3.png");
}else if(randomNumber1===4){
    document.querySelector(".img1").setAttribute("src","./dice4.png");
}else if(randomNumber1===5){
    document.querySelector(".img1").setAttribute("src","./dice5.png");
}else {
    document.querySelector(".img1").setAttribute("src","./dice6.png");
}

var generateRandom2=Math.random();
var randomNumber2=Math.floor(generateRandom2 * 6)+1;
if(randomNumber2===1){
    document.querySelector(".img2").setAttribute("src","./dice1.png");
}else if(randomNumber2===2){
    document.querySelector(".img2").setAttribute("src","./dice2.png");
}else if(randomNumber2===3){
    document.querySelector(".img2").setAttribute("src","./dice3.png");
}else if(randomNumber2===4){
    document.querySelector(".img2").setAttribute("src","./dice4.png");
}else if(randomNumber2===5){
    document.querySelector(".img2").setAttribute("src","./dice5.png");
}else {
    document.querySelector(".img2").setAttribute("src","./dice6.png");
}

if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="Draw";
}else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="Player1 Won";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent="Player2 Won";
}else {
    document.querySelector("h1").textContent="Refresh Me Again";
}
