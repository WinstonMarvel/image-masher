#!/usr/bin/env node
let compress = require('./compresser.js')();
let fs = require('fs');


foldername = process.cwd();

var files = fs.readdirSync(foldername);

files = files.filter((file)=>{
	if(file.match(/.*\.jpg/gi) || file.match(/.*\.png/gi))
		return file;
})

console.log(files);
compress(files, foldername);

