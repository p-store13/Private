const fs = require("fs");

global.creator = "HxcoderID";
global.apikey = ["HxcoderID00", "HxcoderID2001", "HxcoderID1307"];

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update'${__filename}'`);
	delete require.cache[file];
	require(file);
});
