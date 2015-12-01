/*
 * @author Ambrosius Topor
 * @date 2012-Nov-22
 * @version 1.0.0
 *
 */

(function( sc ) {

	sc.JSONML = {

		makeDOMElement: function( jsonMLObject ) {

			var element, item, k, k_attr;

			for ( k in jsonMLObject ) {

				item = jsonMLObject[ k ];

				if ( ( typeof item === "string" ) || ( typeof item === "number" ) ) {
					if ( element ) {
						element.appendChild( document.createTextNode( item ) );
					}
					else if ( typeof item === "string" ) {
						element = document.createElement( item );
					}
				}
				else if ( ( item instanceof Array ) && element ) {
					element.appendChild( JSONML.makeDOMElement( item ) );
				}
				else if ( ( typeof item === "object" ) && element ) {
					for ( k_attr in item ) element.setAttribute( k_attr, item[k_attr ] );
				}
			}

			return element;
		}
	};


})( window );