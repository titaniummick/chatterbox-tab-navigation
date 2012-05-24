ChannelTableViewRow = function(_channelId){
	
	var row = Ti.UI.createTableViewRow({
		height: 50
	});
	
//	var timeStartFormat = moment(_program.start_time, "YYYY-MM-DDTHH:mm:ss z");
//	var timeEndFormat = moment(_program.recurring_until, "YYYY-MM-DDTHH:mm:ss z");
	
//	var timeStart = timeStartFormat.format('HH:mm');
//	var timeEnd = timeEndFormat.format('HH:mm');
	
	row.programName = Ti.UI.createLabel({
		text: 'Channel '+_channelId,
		textAlign: 'left',
		left: 140,
		font:{fontWeight:'bold',fontSize:18},
		top: 10
	});
	row.add(row.programName);
	
/*	var programTime = Ti.UI.createLabel({
		text: timeStart+' - '+timeEnd,
		color: '#420404',
		textAlign:'left',
		font:{fontWeight:'bold',fontSize:13},
		top: 30,
		left:140
	});
	row.add(programTime);
*/
	row.programImage = Ti.UI.createImageView({
		image: 'dummy.png',
		top: 5,
		left: 10,
		bottom: 5,
		width:125,
		height:40
	});
	row.add(row.programImage);
	
	return row;
	
}
module.exports = ChannelTableViewRow;
