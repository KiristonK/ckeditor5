/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals window */

/* config { "additionalLanguages": [ "ar", "es" ] } */

import ClassicEditor from '@ckeditor/ckeditor5-build-classic/src/ckeditor';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';

ClassicEditor.builtinPlugins.push( Superscript );
window.ClassicEditor = ClassicEditor;
