function makeUnselectable(node) {
    if (node.nodeType == 1) {
        node.setAttribute("unselectable", "on");
    }
    var child = node.firstChild;
    while (child) {
        makeUnselectable(child);
        child = child.nextSibling;
    }
}
makeUnselectable(document.getElementById("un1"));


function clickIE() {
    if (document.all) {
        return false;
    }
}
function clickAll(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickAll;
} else {
    document.onmouseup = clickAll;
    document.oncontextmenu = clickIE;
}

document.oncontextmenu = new Function("return false");

document.getElementById('exit').addEventListener('click', function(){
	location.href="http://localhost:5000/spisok";
});
document.getElementById('fda_btn').addEventListener('click', function(){
	location.href+="/save/fda";
});
document.getElementById('fdb_btn').addEventListener('click', function(){
	location.href+="/save/fdb";
});
document.getElementById('hda_btn').addEventListener('click', function(){
	location.href+="/save/hda";
});
document.getElementById('hdb_btn').addEventListener('click', function(){
	location.href+="/save/hdb";
});
document.getElementById('hdc_btn').addEventListener('click', function(){
	location.href+="/save/hdc";
});
document.getElementById('hdd_btn').addEventListener('click', function(){
	location.href+="/save/hdd";
});
document.getElementById('cd_btn').addEventListener('click', function(){
	location.href+="/save/cd";
});
document.getElementById('order').addEventListener('change', function(){
	location.href+="/order/"+document.getElementById('order').value;
});
