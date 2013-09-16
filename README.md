# ee-stream-url-decoder

stream decodes url encoded data

## installation

npm install ee-stream-url-decoder

## usage 

	
	var   StreamDecoder 	= require( "./" )
		, decoder 			= new StreamURLDecoder();


	decoder.on( "data", function( obj ){
		console.dir( obj );
	} );

	decoder.on( "end", function(){
		log( "all data decoded ...." );
	} );


	decoder.end( "key=value&anotherKEy=anotherValue" );