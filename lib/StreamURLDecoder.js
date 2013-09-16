


	var   Class 			= require( "ee-class" )
		, log 				= require( "ee-log" )
		, type 				= require( "ee-types" )
		, querystring 		= require( "querystring" )
		, TransformStream 	= require( "stream" ).Transform;



	module.exports = new Class( {
		inherits: TransformStream


		, buffer: ""
		

		, init: function(){
			TransformStream.call( this, { objectMode: true } );
		}



		, _transform: function( chunk, encoding, callback ){

			var   data 	= this.buffer + chunk.toString()
				, index	= data.lastIndexOf( "&" );

			if ( index ){
				this.buffer = data.substr( index + 1 );
				this.push( querystring.parse( data.substr( 0, index ), null, null, { maxKeys: 10000 } ) );
			}
			else {
				this.buffer = data;
			}
			
			callback();
		}



		, _flush: function( callback ){
			if ( this.buffer ) this.push( querystring.parse( this.buffer ) );
			callback();
		}
	} );