    var cat,mouse;
    var bg;
    var cat3img,mouse3img,cat2img,cat1img,mouse1img,mouse4img;

    function preload() {
    //load the images here
    cat1img=loadAnimation("images/cat1.png") ;
    cat2img=loadAnimation("images/cat2.png","images/cat3.png");
    cat3img=loadAnimation("images/cat4.png");
    mouse1img=loadAnimation("images/mouse1.png")
    mouse2img=loadAnimation("images/mouse2.png","images/mouse3.png");
   
    bg=loadImage("images/garden.png");
}
 
    function setup()
{
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600)
    cat.addAnimation("moving",cat1img);
    cat.scale=0.2;

    mouse = createSprite(200,600)
    mouse.addAnimation("moving",mouse1img);
    mouse.scale=0.15;
}

    function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("cat_running",cat3img);
        cat.x=300;
        cat.scale=0.2;
        cat.changeAnimation("cat_running");
        
        mouse.addAnimation("mouse_run",mouse3img);
        mouse.scale=0.15;
        mouse.changeAnimation("mouse_run")
        
    }
     drawSprites();
    
 } 

    function keyPressed(){
    if (keyCode === LEFT_ARROW){
        cat.velocityx=-5;
        cat.addAnimation("cat_running1",cat2img)
        cat.changeAnimation("cat_running1")

        mouse.addAnimation("mouse_running1",mouse2img)
        mouse.frameDelay=25;
        mouse.changeAnimation("mouse_running1")

        

       
         }
    //For moving and changing animation write code here
}

