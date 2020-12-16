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
makeUnselectable(document.getElementById("root"));


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