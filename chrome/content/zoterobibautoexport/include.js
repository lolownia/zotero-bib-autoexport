// Only create main object once
if (!Zotero.ZoteroBibAutoexport) {
	const loader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
					.getService(Components.interfaces.mozIJSSubScriptLoader);
	loader.loadSubScript("chrome://zoterobibautoexport/content/hello.js");
}
