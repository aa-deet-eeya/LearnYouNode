'use strict'

const ls = ( dir, ext, callback )=>{
	const arrDisp = [] ;
	require('fs').readdir(dir , ( err, data)=>{ 

		if(!err) {
			data.forEach(item=>{
				if(item.split('.')[1] === ext){
				arrDisp.push(item) ;
				}
			}) ;
		}

		else {
			callback(err , null) ;
		}

	
		callback( err, arrDisp) ;


	
	})  ;
	
} ;

module.exports = ls ;
