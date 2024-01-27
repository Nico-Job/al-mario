function preload() {
	world_start = loadSound("world_start.wav");
	coin = loadSound("coin.wav");
	kick = loadSound("kick.wav");
	dead = loadSound("mariodie.wav");
	jump = loadSound("jump.wav");
	game_over = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas") ;
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("webcam");
	posenet = ml5.poseNet(video,modelloaded);
posenet.on("pose", gotPoses);
}
function modelloaded()
{
	console.log("model is loaded");

}

function gotPoses(results)
{

if(results.length > 0 )
{
	console.log(results);
	noseX= results[0].pose.nose.x;
	noseY= results[0].pose.nose.y;
}



}




function draw() {
	game()
}






