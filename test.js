

	var   StreamURLDecoder 	= require( "./" )
		, log 				= require( "ee-log")
		, fs 				= require( "fs" );



	var s = new StreamURLDecoder();

	s.on( "data", function( data ){
		log( data );
	} );

	fs.createReadStream( "./test/urlencoded.data" ).pipe( s );

