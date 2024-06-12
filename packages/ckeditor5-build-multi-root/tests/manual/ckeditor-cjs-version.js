/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* eslint-env commonjs */
/* globals window, document, console */

import * as MRE from '../../build/ckeditor.js';

import * as CKI from '../../../../node_modules/@ckeditor/ckeditor5-inspector/build/inspector.js';

console.log( MRE );
console.log( CKI );

window.MultiRootEditor.create( {
	header: document.getElementById( 'header' ),
	content: document.getElementById( 'content' ),
	leftSide: document.getElementById( 'left-side' ),
	rightSide: document.getElementById( 'right-side' )
}, {
	title: {
		placeholder: {
			header: 'Placeholder test: 11'
		},
		config: {
			header: true,
			content: false,
			leftSide: false,
			rightSide: false
		}
	},
	placeholder: {
		header: 'Placeholder test: 1',
		content: 'Placeholder test: 2',
		leftSide: 'Placeholder test: 3',
		rightSide: 'Placeholder test: 5'
	}

} )
	.then( editor => {
		window.CKEditorInspector.attach( editor );
		window.editor = editor;

		document.getElementById( 'toolbar' ).appendChild( editor.ui.view.toolbar.element );
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	} );
