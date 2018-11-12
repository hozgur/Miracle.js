/// <reference path="./p5.global-mode.d.ts" />

function setup()
{	
	createCanvas(400,400);	
	background(220);

	
	// NwJs Path'ini almak için
	getNwPath();
	// Context Menü eklemek için
	addContextMenu();		
	// Add Menu Bar
	addMenuBar();
}

// Add F5 to Reload Page
function keyPressed() {	
	if (keyCode === 116){	// 116 is keyCode of F5
		window.location.href = window.location.href;	
	}
  }

function getNwPath()
{
	var path = require('path');
	var nwPath = process.execPath;
	var nwDir = path.dirname(nwPath);
	console.log(nwDir);
}

function addMenuBar()
{
	var your_menu = new nw.Menu({ type: 'menubar' });
	var submenu = new nw.Menu();
	submenu.append(new nw.MenuItem({ label: 'Item A' ,click:function(){
		alert('You have clicked at "Item A"');
	  }}));
	submenu.append(new nw.MenuItem({ label: 'Exit' ,click:function(){
		if(confirm('Are you sure to Quit?'))
			nw.App.quit();
	  }}));
	// the menu item appended should have a submenu
	your_menu.append(new nw.MenuItem({
  		label: 'First Menu',
  		submenu: submenu
		}));

	nw.Window.get().menu = your_menu;
}

function addContextMenu()
{
	 // Create an empty context menu
	 var menu = new nw.Menu();
                
	 // Add some items with label
	 menu.append(new nw.MenuItem({
	   label: 'Item A',
	   click: function(){
		 alert('You have clicked at "Item A"');
	   }
	 }));
	 menu.append(new nw.MenuItem({ label: 'Item B' }));
	 menu.append(new nw.MenuItem({ type: 'separator' }));
	 menu.append(new nw.MenuItem({ label: 'Item C' }));
	 
	 // Hooks the "contextmenu" event
	 document.body.addEventListener('contextmenu', function(ev) {
	   // Prevent showing default context menu
	   ev.preventDefault();
	   // Popup the native context menu at place you click
	   menu.popup(ev.x, ev.y);
	 
	   return false;
	 }, false);
}

function draw()
{
	
}