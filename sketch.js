//Create variables here
var dog, dogimg, dogImg1, database, foodS, foodStock;
var foodObj, feedTime, feed, addFood;

function preload()
{
	//load images here
  dogimg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png")
}

function setup() {
	 
  database=firebase.database();
  createCanvas(500, 500)

  dog=createSprite(250,300,150,150);
  dog.addImage(dogimg);
  dog.scale = 0.15;
  
  foodStock=database.ref('Food');
  foodStock.on("value", readStock); //readStock reads data from db
  textSize(20);

}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){

  //writeStock is used to update value from db
    writeStock(foodS)
    dog.addImage(dogImg1);
   }
 

 

feedTime = database.ref("FeedT")


  drawSprites();
  //add styles here
  fill(255, 255, 254)
  text("Note: Press UP_ARROW key to feed Drago Milk!", 100, 30)
  text("Food remaining : "+foodS, 179, 230)
}

function readStock(data){
  foodS=data.val() //val function reads data from db using parameter defined in function
  // store the data from db in foodS
}

function writeStock(x){ //x is getting replaced by foodS, refer to line 34
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}

