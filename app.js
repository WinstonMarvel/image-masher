let compress = require('./compresser.js')();
let fs = require('fs');

var files = fs.readdirSync('./');

files = files.filter((file)=>{
	if(file.match(/.*\.jpg/g) || file.match(/.*\.png/g))
		return file;
})


console.log(files);
// console.log(compress);
compress(files);

