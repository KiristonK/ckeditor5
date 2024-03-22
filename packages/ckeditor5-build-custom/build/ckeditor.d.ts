/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { MultiRootEditor as MultiRootEditorBase } from '@ckeditor/ckeditor5-editor-multi-root';
import { InlineEditor as InlineEditorBase } from '@ckeditor/ckeditor5-editor-inline';
import { DecoupledEditor as DecoupledEditorBase } from '@ckeditor/ckeditor5-editor-decoupled';
import { BalloonEditor as BalloonEditorBase } from '@ckeditor/ckeditor5-editor-balloon';
import { BlockToolbar } from 'ckeditor5/src/ui.js';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Autosave } from '@ckeditor/ckeditor5-autosave';
import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import type { EditorConfig } from 'ckeditor5/src/core.js';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading, Title } from '@ckeditor/ckeditor5-heading';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed';
import { DataFilter, DataSchema, FullPage, GeneralHtmlSupport, HtmlComment } from '@ckeditor/ckeditor5-html-support';
import { AutoImage, Image, ImageCaption, ImageInsert, ImageResize, ImageStyle, ImageToolbar, ImageUpload, ImageUploadEditing, PictureEditing } from '@ckeditor/ckeditor5-image';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { TextPartLanguage } from '@ckeditor/ckeditor5-language';
import { AutoLink, Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { Markdown } from '@ckeditor/ckeditor5-markdown-gfm';
import { MediaEmbed, MediaEmbedToolbar } from '@ckeditor/ckeditor5-media-embed';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { Paragraph } from 'ckeditor5/src/paragraph.js';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { StandardEditingMode } from '@ckeditor/ckeditor5-restricted-editing';
import { SelectAll } from 'ckeditor5/src/select-all.js';
import { ShowBlocks } from '@ckeditor/ckeditor5-show-blocks';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText } from '@ckeditor/ckeditor5-special-characters';
import { Style } from '@ckeditor/ckeditor5-style';
import { Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from 'ckeditor5/src/typing.js';
import { Undo } from 'ckeditor5/src/undo.js';
import { Base64UploadAdapter } from 'ckeditor5/src/upload.js';
import { EditorWatchdog } from '@ckeditor/ckeditor5-watchdog';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
declare class ClassicEditor extends ClassicEditorBase {
    static builtinPlugins: (typeof Base64UploadAdapter | typeof CloudServices | typeof Alignment | typeof Paragraph | typeof Heading | typeof Title | typeof TextTransformation | typeof Autoformat | typeof Autosave | typeof Superscript | typeof Subscript | typeof Bold | typeof Code | typeof Italic | typeof Strikethrough | typeof Underline | typeof BlockQuote | typeof List | typeof ListProperties | typeof TodoList | typeof CodeBlock | typeof SelectAll | typeof Undo | typeof Essentials | typeof FindAndReplace | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Highlight | typeof HorizontalLine | typeof HtmlEmbed | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof ImageUploadEditing | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar | typeof GeneralHtmlSupport | typeof DataFilter | typeof DataSchema | typeof HtmlComment | typeof FullPage | typeof Indent | typeof IndentBlock | typeof TextPartLanguage | typeof AutoLink | typeof Link | typeof LinkImage | typeof Markdown | typeof MediaEmbed | typeof MediaEmbedToolbar | typeof Mention | typeof PageBreak | typeof PasteFromOffice | typeof RemoveFormat | typeof StandardEditingMode | typeof ShowBlocks | typeof SourceEditing | typeof SpecialCharacters | typeof SpecialCharactersText | typeof SpecialCharactersArrows | typeof SpecialCharactersEssentials | typeof SpecialCharactersLatin | typeof SpecialCharactersCurrency | typeof SpecialCharactersMathematical | typeof Style | typeof WordCount | typeof PictureEditing)[];
    static defaultConfig: EditorConfig;
}
declare class MultiRootEditor extends MultiRootEditorBase {
    static builtinPlugins: (typeof Base64UploadAdapter | typeof CloudServices | typeof Alignment | typeof Paragraph | typeof Heading | typeof Title | typeof TextTransformation | typeof Autoformat | typeof Autosave | typeof Superscript | typeof Subscript | typeof Bold | typeof Code | typeof Italic | typeof Strikethrough | typeof Underline | typeof BlockQuote | typeof List | typeof ListProperties | typeof TodoList | typeof CodeBlock | typeof SelectAll | typeof Undo | typeof Essentials | typeof FindAndReplace | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Highlight | typeof HorizontalLine | typeof HtmlEmbed | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof ImageUploadEditing | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar | typeof GeneralHtmlSupport | typeof DataFilter | typeof DataSchema | typeof HtmlComment | typeof FullPage | typeof Indent | typeof IndentBlock | typeof TextPartLanguage | typeof AutoLink | typeof Link | typeof LinkImage | typeof Markdown | typeof MediaEmbed | typeof MediaEmbedToolbar | typeof Mention | typeof PageBreak | typeof PasteFromOffice | typeof RemoveFormat | typeof StandardEditingMode | typeof ShowBlocks | typeof SourceEditing | typeof SpecialCharacters | typeof SpecialCharactersText | typeof SpecialCharactersArrows | typeof SpecialCharactersEssentials | typeof SpecialCharactersLatin | typeof SpecialCharactersCurrency | typeof SpecialCharactersMathematical | typeof Style | typeof WordCount | typeof PictureEditing)[];
    static defaultConfig: EditorConfig;
}
declare class InlineEditor extends InlineEditorBase {
    static builtinPlugins: (typeof Base64UploadAdapter | typeof CloudServices | typeof Alignment | typeof Paragraph | typeof Heading | typeof Title | typeof TextTransformation | typeof Autoformat | typeof Autosave | typeof Superscript | typeof Subscript | typeof Bold | typeof Code | typeof Italic | typeof Strikethrough | typeof Underline | typeof BlockQuote | typeof List | typeof ListProperties | typeof TodoList | typeof CodeBlock | typeof SelectAll | typeof Undo | typeof Essentials | typeof FindAndReplace | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Highlight | typeof HorizontalLine | typeof HtmlEmbed | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof ImageUploadEditing | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar | typeof GeneralHtmlSupport | typeof DataFilter | typeof DataSchema | typeof HtmlComment | typeof FullPage | typeof Indent | typeof IndentBlock | typeof TextPartLanguage | typeof AutoLink | typeof Link | typeof LinkImage | typeof Markdown | typeof MediaEmbed | typeof MediaEmbedToolbar | typeof Mention | typeof PageBreak | typeof PasteFromOffice | typeof RemoveFormat | typeof StandardEditingMode | typeof ShowBlocks | typeof SourceEditing | typeof SpecialCharacters | typeof SpecialCharactersText | typeof SpecialCharactersArrows | typeof SpecialCharactersEssentials | typeof SpecialCharactersLatin | typeof SpecialCharactersCurrency | typeof SpecialCharactersMathematical | typeof Style | typeof WordCount | typeof PictureEditing)[];
    static defaultConfig: EditorConfig;
}
declare class DecoupledEditor extends DecoupledEditorBase {
    static builtinPlugins: (typeof Base64UploadAdapter | typeof CloudServices | typeof Alignment | typeof Paragraph | typeof Heading | typeof Title | typeof TextTransformation | typeof Autoformat | typeof Autosave | typeof Superscript | typeof Subscript | typeof Bold | typeof Code | typeof Italic | typeof Strikethrough | typeof Underline | typeof BlockQuote | typeof List | typeof ListProperties | typeof TodoList | typeof CodeBlock | typeof SelectAll | typeof Undo | typeof Essentials | typeof FindAndReplace | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Highlight | typeof HorizontalLine | typeof HtmlEmbed | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof ImageUploadEditing | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar | typeof GeneralHtmlSupport | typeof DataFilter | typeof DataSchema | typeof HtmlComment | typeof FullPage | typeof Indent | typeof IndentBlock | typeof TextPartLanguage | typeof AutoLink | typeof Link | typeof LinkImage | typeof Markdown | typeof MediaEmbed | typeof MediaEmbedToolbar | typeof Mention | typeof PageBreak | typeof PasteFromOffice | typeof RemoveFormat | typeof StandardEditingMode | typeof ShowBlocks | typeof SourceEditing | typeof SpecialCharacters | typeof SpecialCharactersText | typeof SpecialCharactersArrows | typeof SpecialCharactersEssentials | typeof SpecialCharactersLatin | typeof SpecialCharactersCurrency | typeof SpecialCharactersMathematical | typeof Style | typeof WordCount | typeof PictureEditing)[];
    static defaultConfig: EditorConfig;
}
declare class BalloonEditor extends BalloonEditorBase {
    static builtinPlugins: (typeof Base64UploadAdapter | typeof CloudServices | typeof Alignment | typeof Paragraph | typeof Heading | typeof Title | typeof TextTransformation | typeof Autoformat | typeof Autosave | typeof Superscript | typeof Subscript | typeof Bold | typeof Code | typeof Italic | typeof Strikethrough | typeof Underline | typeof BlockQuote | typeof List | typeof ListProperties | typeof TodoList | typeof CodeBlock | typeof SelectAll | typeof Undo | typeof Essentials | typeof FindAndReplace | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Highlight | typeof HorizontalLine | typeof HtmlEmbed | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof ImageUploadEditing | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar | typeof GeneralHtmlSupport | typeof DataFilter | typeof DataSchema | typeof HtmlComment | typeof FullPage | typeof Indent | typeof IndentBlock | typeof TextPartLanguage | typeof AutoLink | typeof Link | typeof LinkImage | typeof Markdown | typeof MediaEmbed | typeof MediaEmbedToolbar | typeof Mention | typeof PageBreak | typeof PasteFromOffice | typeof RemoveFormat | typeof StandardEditingMode | typeof ShowBlocks | typeof SourceEditing | typeof SpecialCharacters | typeof SpecialCharactersText | typeof SpecialCharactersArrows | typeof SpecialCharactersEssentials | typeof SpecialCharactersLatin | typeof SpecialCharactersCurrency | typeof SpecialCharactersMathematical | typeof Style | typeof WordCount | typeof PictureEditing)[];
    static defaultConfig: EditorConfig;
}
declare class BalloonBlockEditor extends BalloonEditorBase {
    static builtinPlugins: (typeof BlockToolbar | typeof Base64UploadAdapter | typeof CloudServices | typeof Alignment | typeof Paragraph | typeof Heading | typeof Title | typeof TextTransformation | typeof Autoformat | typeof Autosave | typeof Superscript | typeof Subscript | typeof Bold | typeof Code | typeof Italic | typeof Strikethrough | typeof Underline | typeof BlockQuote | typeof List | typeof ListProperties | typeof TodoList | typeof CodeBlock | typeof SelectAll | typeof Undo | typeof Essentials | typeof FindAndReplace | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Highlight | typeof HorizontalLine | typeof HtmlEmbed | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof ImageUploadEditing | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar | typeof GeneralHtmlSupport | typeof DataFilter | typeof DataSchema | typeof HtmlComment | typeof FullPage | typeof Indent | typeof IndentBlock | typeof TextPartLanguage | typeof AutoLink | typeof Link | typeof LinkImage | typeof Markdown | typeof MediaEmbed | typeof MediaEmbedToolbar | typeof Mention | typeof PageBreak | typeof PasteFromOffice | typeof RemoveFormat | typeof StandardEditingMode | typeof ShowBlocks | typeof SourceEditing | typeof SpecialCharacters | typeof SpecialCharactersText | typeof SpecialCharactersArrows | typeof SpecialCharactersEssentials | typeof SpecialCharactersLatin | typeof SpecialCharactersCurrency | typeof SpecialCharactersMathematical | typeof Style | typeof WordCount | typeof PictureEditing)[];
    static defaultConfig: EditorConfig;
}
declare const _default: {
    ClassicEditor: typeof ClassicEditor;
    MultiRootEditor: typeof MultiRootEditor;
    InlineEditor: typeof InlineEditor;
    DecoupledEditor: typeof DecoupledEditor;
    BalloonEditor: typeof BalloonEditor;
    BalloonBlockEditor: typeof BalloonBlockEditor;
    EditorWatchdog: typeof EditorWatchdog;
};
export default _default;
