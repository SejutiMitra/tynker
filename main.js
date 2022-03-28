var score=0;
var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;

block_image_width = 200;
block_image_height = 200;

var block_image_object= "";

function new_image(get_image)
{
   fabric.Image.fromURL(get_image, function(Img) {
   block_image_object = Img;
	   
   block_image_object.scaleToWidth(block_image_width);
   block_image_object.scaleToHeight(block_image_height);
   block_image_object.set({
   top:block_y,
   left:block_x
   });
   canvas.add(block_image_object);

   });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);


   if(keyPressed == '66')
   {
      block_x = 30;
      block_y = 100;
	   new_image('battery.png'); 
      document.getElementById("output").innerHTML="This is Recylable!"
      document.getElementById("output").style.color="green";
      score=score+1;
      document.getElementById("scores").innerHTML=score;
	   console.log("B");
   }
   if(keyPressed == '67')
   {
	   block_x = 200;
      block_y = 100;
	   new_image('box.png'); 
      document.getElementById("output").innerHTML="This is Recylable!"
      document.getElementById("output").style.color="green";
      score=score+1;
      document.getElementById("scores").innerHTML=score;
	   console.log("C");
   }
   
   if(keyPressed == '71')
   {
	   block_x =380;
      block_y = 100;
	   new_image('glass.png'); 
      document.getElementById("output").innerHTML="This is Recylable!"
      document.getElementById("output").style.color="green";
      score=score+1;
      document.getElementById("scores").innerHTML=score;
	   console.log("G");
   }
   if(keyPressed == '80')
   {
	   block_x = 600;
      block_y = 100;
	   new_image('paper.png'); 
      document.getElementById("output").innerHTML="This is Recylable!"
      document.getElementById("output").style.color="green";
      score=score+1;
      document.getElementById("scores").innerHTML=score;
	   console.log("p");
   }
   if(keyPressed == '84')
   {
	   block_x = 850;
      block_y = 100;
	   new_image('can.png'); 
      document.getElementById("output").innerHTML="This is Recylable!"
      document.getElementById("output").style.color="green";
      score=score+1;
      document.getElementById("scores").innerHTML=score;
	   console.log("T");
   }
   if(keyPressed == '86')
   {
	   block_x = 1000;
      block_y = 100;
	   new_image('bottle.png'); 
      document.getElementById("output").innerHTML="This is Recylable!"
      document.getElementById("output").style.color="green";
      score=score+1;
      document.getElementById("scores").innerHTML=score;
	   console.log("V");
   }


   if(keyPressed == '65')
   {
      document.getElementById("output").innerHTML="This is NOT Recylable!";
      document.getElementById("output").style.color="red";
      score=score-1;
      document.getElementById("scores").innerHTML=score;
	   console.log("A");
   }
   if(keyPressed == '76')
   {
      document.getElementById("output").innerHTML="This is NOT Recylable!";
      document.getElementById("output").style.color="red";
      score=score-1;
      document.getElementById("scores").innerHTML=score;
	   console.log("L");
   }
   if(keyPressed == '77')
   {
      document.getElementById("output").innerHTML="This is NOT Recylable!";
      document.getElementById("output").style.color="red";
      score=score-1;
      document.getElementById("scores").innerHTML=score;
	   console.log("M");
   }
   if(keyPressed == '83')
   {
      document.getElementById("output").innerHTML="This is NOT Recylable!";
      document.getElementById("output").style.color="red";
      score=score-1;
      document.getElementById("scores").innerHTML=score;
	   console.log("S");
   }
   if(keyPressed == '85')
   {
      document.getElementById("output").innerHTML="This is NOT Recylable!";
      document.getElementById("output").style.color="red";
      score=score-1;
      document.getElementById("scores").innerHTML=score;
	   console.log("U");
   }


   
}

var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    if(score==6){
      document.getElementById("output").innerHTML="Congratulations! You have gotten all right!"
      document.getElementById("output").style.color="green";}
   if(score<=5){
         document.getElementById("output").innerHTML="Try Again!"
         document.getElementById("output").style.color="red";}
  }
  times= document.getElementById("progressBar").value = 60 - timeleft;
  timeleft -= 1;
}, 1000);

