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
makeUnselectable(document.getElementById("bootmenu"));


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

var in_boot_select=false;
var after=false;

function boot(order){
	after=true;
  location.href="http://localhost:5000/start_up/"+order;
}

document.getElementById('a').addEventListener('click',function(){boot('a')});
document.getElementById('b').addEventListener('click',function(){boot('b')});
document.getElementById('c').addEventListener('click',function(){boot('c')});
document.getElementById('d').addEventListener('click',function(){boot('d')});
document.getElementById('n').addEventListener('click',function(){boot('n')});

window.addEventListener("keydown", function(e){
  if(in_boot_select==false){
    if(e.code=="F12" || e.key=="F12"){
      in_boot_select=true;
      document.body.style.background="black";
      document.getElementById('info_start').style.display="none";
      document.getElementById('bootmenu').style.display="block";
    }
  }
  else if(after==false){
    if(e.key=="ф" || e.key=="a" || e.code=="KeyA")boot('a');
    else if(e.key=="и" || e.key=="b" || e.code=="KeyB")boot('b');
    else if(e.key=="1" || e.code=="Digit1")boot('c');
    else if(e.key=="с" || e.key=="c" || e.code=="KeyC")boot('d');
    else if(e.key=="т" || e.key=="n" || e.code=="KeyN")boot('n');
  }
}, false);
setTimeout(function(){
  document.getElementsByTagName('timer')[0].textContent='3';
  setTimeout(function(){
    document.getElementsByTagName('timer')[0].textContent='2';
    setTimeout(function(){
      document.getElementsByTagName('timer')[0].textContent='1';
      setTimeout(function(){
        document.getElementsByTagName('timer')[0].textContent='0';
      if(in_boot_select==false){
        in_boot_select=true;
        boot('default');
      }
    },1000);
  },1000);
  },1000);
},1000);
