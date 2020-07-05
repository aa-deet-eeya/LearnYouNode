const http = require('http') ;

http.get(process.agrv[2] , res=>{
	res.setEncoding('utf-8') ;
	let character='' , data='' ;

	res.on('connected', chunk=>{
		data+= chunk ;
		character+= chunk.length ;
	}) ;

	res.on('end', ()=>{
		try {
			console.log(character, data) ;
		} catch(e) {
			console.log(e) ;
		}
	}) ;

}) ;
