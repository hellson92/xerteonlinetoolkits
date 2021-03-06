Clazz.declarePackage ("JSV.source");
Clazz.load (["JSV.source.JDXHeader"], "JSV.source.JDXSource", ["JU.List"], function () {
c$ = Clazz.decorateAsClass (function () {
this.type = 0;
this.isCompoundSource = false;
this.jdxSpectra = null;
this.errors = "";
this.filePath = null;
this.peakCount = 0;
this.isView = false;
Clazz.instantialize (this, arguments);
}, JSV.source, "JDXSource", JSV.source.JDXHeader);
$_M(c$, "dispose", 
function () {
this.headerTable = null;
this.jdxSpectra = null;
});
Clazz.makeConstructor (c$, 
function (type, filePath) {
Clazz.superConstructor (this, JSV.source.JDXSource, []);
this.type = type;
this.setFilePath (filePath);
this.headerTable =  new JU.List ();
this.jdxSpectra =  new JU.List ();
this.isCompoundSource = (type != 0);
}, "~N,~S");
$_M(c$, "getJDXSpectrum", 
function (index) {
return (this.jdxSpectra.size () <= index ? null : this.jdxSpectra.get (index));
}, "~N");
$_M(c$, "addJDXSpectrum", 
function (filePath, spectrum, forceSub) {
if (filePath == null) filePath = this.filePath;
spectrum.setFilePath (filePath);
var n = this.jdxSpectra.size ();
if (n == 0 || !this.jdxSpectra.get (n - 1).addSubSpectrum (spectrum, forceSub)) this.jdxSpectra.addLast (spectrum);
}, "~S,JSV.common.JDXSpectrum,~B");
$_M(c$, "getNumberOfSpectra", 
function () {
return this.jdxSpectra.size ();
});
$_M(c$, "getSpectra", 
function () {
return this.jdxSpectra;
});
$_M(c$, "getSpectraAsArray", 
function () {
return (this.jdxSpectra == null ? null : this.jdxSpectra.toArray ());
});
$_M(c$, "getErrorLog", 
function () {
return this.errors;
});
$_M(c$, "setErrorLog", 
function (errors) {
this.errors = errors;
}, "~S");
$_M(c$, "setFilePath", 
function (filePath) {
this.filePath = filePath;
}, "~S");
$_M(c$, "getFilePath", 
function () {
return this.filePath;
});
c$.createView = $_M(c$, "createView", 
function (specs) {
var source =  new JSV.source.JDXSource (-2, "view");
source.isView = true;
for (var i = 0; i < specs.size (); i++) source.addJDXSpectrum (specs.get (i).getFilePath (), specs.get (i), false);

return source;
}, "JU.List");
$_M(c$, "getHeaderRowDataAsArray", 
function (addDataClass, rowData) {
if (rowData == null) rowData =  Clazz.newArray (0, 0, null);
var data = this.getHeaderRowDataAsArray (addDataClass, rowData.length);
for (var i = rowData.length; --i >= 0; ) data[data.length - rowData.length + i] = rowData[i];

return data;
}, "~B,~A");
$_M(c$, "setID", 
function (id) {
this.jdxSpectra.get (0).sourceID = id;
}, "~S");
Clazz.defineStatics (c$,
"TYPE_VIEW", -2,
"TYPE_UNKNOWN", -1,
"TYPE_SIMPLE", 0,
"TYPE_BLOCK", 1,
"TYPE_NTUPLE", 2);
});
