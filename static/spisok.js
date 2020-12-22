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
//makeUnselectable(document.getElementById("nblock"));


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

var empty_spisok=parseInt(document.getElementById('selector').size)<1;

if(!empty_spisok)document.getElementById('cur_vm').value=document.getElementById('selector').item(0).value;
if(parseInt(document.getElementById('selector').size)<2)document.getElementById('selector').size="2";

document.getElementById('exit').addEventListener('click', function(){
	location.href="http://localhost:5000/exit";
});
function fix_f(){
	document.getElementById('cur_vm').value=document.getElementById('selector').value;
}
document.getElementById('selector').addEventListener('change', fix_f);
document.getElementById('selector').addEventListener('click', fix_f);

document.getElementById('plus').addEventListener('click', function(){
	var is_exists=false;
	if(empty_spisok)is_exists=false;
	else{
	for(var i=0;i<document.getElementById('selector').size;i++){
		if(document.getElementById('cur_vm').value==document.getElementById('selector').item(i).value){
			is_exists=true;
		}
	}
	}
	if(is_exists==false && document.getElementById('cur_vm').value!=''){
    location.href="http://localhost:5000/add_vm_to_spisok/"+document.getElementById('cur_vm').value;
	}
});

document.getElementById('minus').addEventListener('click', function(){
	for(var i=0;i<document.getElementById('selector').size;i++){
		if(document.getElementById('cur_vm').value==document.getElementById('selector').item(i).value){
      location.href="http://localhost:5000/remove_vm_from_spisok/"+document.getElementById('cur_vm').value;
		}
	}
});

document.getElementById('run').addEventListener('click',function(){
var is_exists=false;
for(var i=0;i<document.getElementById('selector').size;i++){
  if(document.getElementById('cur_vm').value==document.getElementById('selector').item(i).value){
    is_exists=true;
  }
}
  if(is_exists==true)location.href="http://localhost:5000/run_vm/"+document.getElementById('cur_vm').value;
});

document.getElementById('sets').addEventListener('click',function(){
var is_exists=false;
for(var i=0;i<document.getElementById('selector').size;i++){
  if(document.getElementById('cur_vm').value==document.getElementById('selector').item(i).value){
    is_exists=true;
  }
}
  if(is_exists==true)location.href="http://localhost:5000/sets/"+document.getElementById('cur_vm').value;
});
document.getElementById('setup_disks').addEventListener('click',function(){
var is_exists=false;
for(var i=0;i<document.getElementById('selector').size;i++){
  if(document.getElementById('cur_vm').value==document.getElementById('selector').item(i).value){
    is_exists=true;
  }
}
  if(is_exists==true)location.href="http://localhost:5000/setup_disks/"+document.getElementById('cur_vm').value;
});
