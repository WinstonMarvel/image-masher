const sharp = require('sharp');


// sharp(files[0])
// 	.toFile(files[0]+"compressed", (err) =>{
// 		console.log("compressing file: ${i}");
// 		if(err)
// 			console.log(err);
// 		if(i > files.length){
// 			i++;
// 			sharp(files[i]+"compressed", null);
// 		}
// 	});


function compressor_module(){
    var i = 0;    
    // console.log(`${file_arr.length} files have been identified for compression..`);
    
    var compress = function(file_arr, foldername) {
        if (i < file_arr.length) {
            sharp(file_arr[i]).toFile(`${foldername}/compressed/${file_arr[i]}`, (err) => {
                if (err)
                    console.log(err);
                console.log(`Compressing file: ${i}`);
                compress(file_arr, foldername);
            }); 
            i++;
        } 
        else{
            console.log("All files have been compressed.");
        }
    } 
    return compress; 
}




module.exports = compressor_module;