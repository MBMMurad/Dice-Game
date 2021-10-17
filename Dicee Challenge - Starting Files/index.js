function random_number(){
  return Math.ceil(Math.random()*6)
}
dice1=random_number();
document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+dice1+".png");
dice2=random_number();
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+dice2+".png");

if(dice2>dice1){
   document.getElementsByTagName("h1")[0].innerHTML="Showrovy Wins🚩";
}
else if(dice2<dice1)
{
  document.getElementsByTagName("h1")[0].innerHTML="🚩Murad Wins";
}
else{
  document.getElementsByTagName("h1")[0].innerHTML="Play again";
}
