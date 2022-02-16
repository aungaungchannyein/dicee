var dic1 = Math.floor(Math.random()*6+1)

var dic1Pic = "images/dice"+dic1+".png"
    
var dic2 = Math.floor(Math.random()*6+1)

var dic2Pic = "images/dice"+dic2+".png"
    
if( dic1 > dic2){
      document.querySelector("h1").innerHTML="Player 1 win"
    }
else if( dic1 < dic2 ){
      document.querySelector("h1").innerHTML="Player 2 win"
    }
else{
    document.querySelector("h1").innerHTML="Draw!"
}

document.querySelector(".img1").setAttribute("src",dic1Pic)
    
document.querySelector(".img2").setAttribute("src",dic2Pic)