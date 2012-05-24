//INCLUDED FILES
var ChannelWindow = require('ChannelWindow');
var ChannelTableViewRow = require('ChannelTableViewRow');

//HELPER VARIABLES
var channelsList = ['3','5','7','9','11','pbs'];
var dataForTab = []; 

//UI STUFF
var mainWin = Titanium.UI.createWindow({
	left: 0,
	zIndex: 1,
	backgroundColor:'transparent'
});

var navigationGroupWin = Titanium.UI.createWindow({
    backgroundColor: 'orange',
    title: 'Fb Tab Menu',
    left: 0,
	zIndex: 2
});

var nav = Titanium.UI.iPhone.createNavigationGroup({
   window: navigationGroupWin,
   left: 0,
   width: Ti.Platform.displayCaps.platformWidth
});

var channelSelectorPopupWin = Ti.UI.createWindow({
	backgroundColor: 'black',
	left: 10, 
	top: 50, 
	width: 300,
	height: 'auto',
	borderWidth: 5,
	borderColor: 'black',
	borderRadius: 15,
	zIndex: 3
});

var triangleImage = Ti.UI.createImageView({
	image: 'triangle.png',
	height: 20,
	top: 35,
	left: 175
});

var tableViewForTab	= Ti.UI.createTableView({backgroundColor:'pink' });

var channelSelectorBtn = Ti.UI.createButton({
	title: 'Tab',
	right: 45,
	width: 50,
	height: 30,
	top: 10
});

//ADDING UI TO THE PAGE

channelSelectorPopupWin.add(tableViewForTab);
nav.add(channelSelectorBtn);
mainWin.add(nav);
mainWin.open();

//LOGIC STUFF
for(var i=0;i<channelsList.length;i++) {
	var curChannel = new ChannelTableViewRow(channelsList[i]);
	dataForTab.push(curChannel);
}
tableViewForTab.setData(dataForTab);

//EVENT LISTENERS
var channelSelectorToggle = true;
channelSelectorBtn.addEventListener('click',function(e){
	if(channelSelectorToggle) {
		channelSelectorToggle = false;
		channelSelectorPopupWin.open();
		mainWin.add(triangleImage);
	} else {
		channelSelectorToggle = true;
		channelSelectorPopupWin.close();
		mainWin.remove(triangleImage);
	}
});

//add event listener for each tableviewrow
for(var i=0;i<dataForTab.length;i++) {
	var curChannel = dataForTab[i];
	curChannel.addEventListener('click', function(e) {
		alert(e.rowData.programName.text + ' is clicked');
		channelSelectorToggle = true;
		channelSelectorPopupWin.close();
		mainWin.remove(triangleImage);
	});
}
