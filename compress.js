//file managing modules
var fs=require('fs');
var ncp=require('ncp').ncp;




var publicDir="public"; // the original directory
var publicMinDir="publicMin"; // the minified directory and the name of the final zip

//max size that the zip should be
var maxSize=13312; //thats 13 kb = 13 x 1024 bytes




//minification libraries
var UglifyJS=require("uglify-js");
//var minify = require("minify"); //I didn't include this because I wasn't really sure how it worked.
var cleanCSS = require('clean-css');

// Zipping library
var EasyZip = require('easy-zip').EasyZip;


var colors = require('colors');




function copyPublicDir(callback){


	//delete the file that exists recursively
	
	var deleteFolderRecursive = function(path) {
	  if( fs.existsSync(path) ) {
		fs.readdirSync(path).forEach(function(file,index){
		  var curPath = path + "/" + file;
		  if(fs.statSync(curPath).isDirectory()) { // recurse
		    deleteFolderRecursive(curPath);
		  } else { // delete file
		    fs.unlinkSync(curPath);
		  }
		});
		fs.rmdirSync(path);
	  }
	};


	deleteFolderRecursive(publicMinDir);




	//copy public recursively using ncp

	//ncp.stopOnErr=true;
	ncp.limit = 16;

	ncp(publicDir, publicMinDir, function (err) {
	 if (err) {
	   return console.error(err);
	 }
	// console.log('done!');
	 callback();
	});

}


// this object contains the functions that will be executed if a file has a certain extension
// Please make sure that these function are synchronous, otherwise bad things may happen!
var minifyFunctions={

	".js":function(path){

			var data=UglifyJS.minify(path);
			//console.log(data);
			fs.writeFileSync(path,data.code);

	},
	".css":function(path){
			var data=fs.readFileSync(path,{encoding:"utf8"})
			console.log(data);
			var minimized = cleanCSS.process(data);
			fs.writeFileSync(path,minimized);			
			//minify.optimize(path);

	},
	".html":function(path){
			//minify.optimize(path);
	},



}
////////////////////////////////////////////////////



function minifyFiles(callback){


	function getExtension(filename) {
		var i = filename.lastIndexOf('.');
		return (i < 0) ? '' : filename.substr(i);
	}

	var minifyFile = function(path){
		
		var ext=getExtension(path);
		//console.log(ext);
		
		if (ext in minifyFunctions){
			minifyFunctions[ext](path);
		}
	}

	
	var minifyFolderRecursive = function(path) {
	  if( fs.existsSync(path) ) {
		fs.readdirSync(path).forEach(function(file,index){
		  var curPath = path + "/" + file;
		  if(fs.statSync(curPath).isDirectory()) { // recurse
		    minifyFolderRecursive(curPath);
		  } else { // delete file
		  	minifyFile(curPath);
		    //fs.unlinkSync(curPath);
		  }
		});
		//fs.rmdirSync(path);
	  }
	};

	minifyFolderRecursive(publicMinDir)
	callback();
	
}


function zipOurFiles(callback){

var zip = new EasyZip();
zip.zipFolder(publicMinDir,function(){
    zip.writeToFileSycn(publicMinDir+'.zip');  //yeah, it's a typo in the EasyZip library :"Sycn"
    callback();
});


}


function verifySize(){
	var stats=fs.statSync(publicMinDir+'.zip');
	var size=stats.size;
	
	if (size <= maxSize){
		console.log("You're safe!".green.inverse);
	}
	else{
	
		console.log("You aren't safe. The file is too big!!!!!!".red.inverse);
	}
	
	console.log("You used",size,"bytes out of",maxSize);
	console.log("That's",Math.round((size/maxSize*100)*100)/100,"percent"); // I round it up to to decimal spaces.
	//console.log(stats);

}



// We execute our functions!!!!
// Hurrayz for the callback chain!!!!
copyPublicDir(function(){
			
			
				minifyFiles(function(){
				
							zipOurFiles(function(){
									
									verifySize();		
									
							});
							
				});   
						
						 
});






