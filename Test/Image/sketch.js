/// <reference path="./p5.global-mode.d.ts" />

var imgSource;
var imgDest;
var canvasSize = [800,800];
function preload(){
	imgSource = loadImage('./images/portrait2-big.png',()=>{
		canvasSize[0] = imgSource.width;
		canvasSize[1] = imgSource.height;
		console.log(canvasSize);
	});
	
}

// function windowResized() {
// 	canvasSize = [windowWidth,windowHeight];
// 	resizeCanvas(windowWidth, windowHeight,false);
// 	console.log(canvasSize);	
//   }

function setup()
{
	
	createCanvas(canvasSize[0],canvasSize[1]);	
	background(220);
	imgSource.loadPixels();	
	imgDest = createImage(imgSource.width,imgSource.height);
	drawImage();	
	image(imgSource,0,0);
	image(imgDest,400,0);
	var path = require('path');
	var nwPath = process.execPath;
	var nwDir = path.dirname(nwPath);
	console.log(nwDir);
}
	
function drawImage(){	
	console.log(imgSource.width + "," + imgSource.height);
	console.time("loadpixels");
	imgDest.loadPixels();
	console.timeEnd("loadpixels");	
	console.time("pixel man.");
	for(var y = 0;y<imgSource.height;y++){
		for(var x=0;x<imgSource.width;x++){
			var iSource = (y *imgDest.width+x) *4;
			var iDest = (y *imgSource.width+x) *4;
			imgDest.pixels[iSource] = imgSource.pixels[iDest];
			imgDest.pixels[iSource+1] = imgSource.pixels[iDest+1]/2;
			imgDest.pixels[iSource+2] = imgSource.pixels[iDest+2]/3;
			imgDest.pixels[iSource+3] = imgSource.pixels[iDest+3];			
		}
	}	
	console.timeEnd("pixel man.");
	console.time("updatePixel");
	imgDest.updatePixels();	
	console.timeEnd("updatePixel");
	console.log("**************");
}

function mousePressed()
{
		
}
function keyPressed() {	
	if (keyCode === 116){
		window.location.href = window.location.href;	
	}
  }
function draw()
{
	if(mouseIsPressed){
		imgDest.loadPixels();
		imgDest.pixels[(mouseY*imgDest.width+mouseX)*4] = 0;
		imgDest.pixels[(mouseY*imgDest.width+mouseX)*4+1] = 0;
		imgDest.pixels[(mouseY*imgDest.width+mouseX)*4+2] = 0;	
		imgDest.pixels[(mouseY*imgDest.width+mouseX)*4+3] = 255;	
		imgDest.updatePixels();
		image(imgDest,400,0);
	}
	
}