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
makeUnselectable(document.getElementById("main_td"));
makeUnselectable(document.getElementById("disel1"));
makeUnselectable(document.getElementById("disel2"));
makeUnselectable(document.getElementById("disel3"));
makeUnselectable(document.getElementById("disel4"));
makeUnselectable(document.getElementById("disel5"));
makeUnselectable(document.getElementById("disel6"));
makeUnselectable(document.getElementById("disel7"));
makeUnselectable(document.getElementById("disel8"));
makeUnselectable(document.getElementById("disel9"));
makeUnselectable(document.getElementById("disel10"));
makeUnselectable(document.getElementById("disel11"));
makeUnselectable(document.getElementById("disel12"));
makeUnselectable(document.getElementById("disel13"));
makeUnselectable(document.getElementById("disel14"));
makeUnselectable(document.getElementById("disel15"));
makeUnselectable(document.getElementById("disel16"));
makeUnselectable(document.getElementById("disel17"));
makeUnselectable(document.getElementById("disel18"));
makeUnselectable(document.getElementById("disel19"));
makeUnselectable(document.getElementById("disel20"));
makeUnselectable(document.getElementById("disel21"));
makeUnselectable(document.getElementById("disel22"));
makeUnselectable(document.getElementById("disel23"));
makeUnselectable(document.getElementById("disel24"));
makeUnselectable(document.getElementById("disel25"));
makeUnselectable(document.getElementById("disel26"));
makeUnselectable(document.getElementById("disel27"));
makeUnselectable(document.getElementById("disel28"));
makeUnselectable(document.getElementById("disel29"));
makeUnselectable(document.getElementById("disel30"));
makeUnselectable(document.getElementById("disel31"));
makeUnselectable(document.getElementById("disel32"));
makeUnselectable(document.getElementById("disel33"));


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

document.getElementById('ews').addEventListener('click', function(){
  location.href="http://localhost:5000/spisok";
});

function get_query_arguments()
{
    var query = location.search.substr(1).replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').replace('&amp;','&').split("&"); //fix bug
    var parameters = {};

    for(var i = 0; i < query.length; i++)
    {
        var param = query[i].split("=");
        parameters[param[0]] = decodeURIComponent(param[1]);
    }

    return parameters;
}
var query_args=get_query_arguments();
if(query_args['sdl']=="on")document.getElementById('sdl').checked=true;
if(query_args['vnc']=="on")document.getElementById('vnc').checked=true;
if(query_args['vnc_ip']!==undefined)document.getElementById('vnc_ip').value=query_args['vnc_ip'];
if(query_args['nographic']=="on")document.getElementById('nographic').checked=true;
if(query_args['arc']=="x64")document.getElementById('arc64').checked=true;
else document.getElementById('arc32').checked=true;
if(query_args['stdio']=="on")document.getElementById('stdio').checked=true;
if(query_args['vc']=="on")document.getElementById('vc').checked=true;
if(query_args['sb16']=="on")document.getElementById('sb16').checked=true;
if(query_args['speaker']=="on")document.getElementById('speaker').checked=true;
if(query_args['ac97']=="on")document.getElementById('ac97').checked=true;
if(query_args['ihda']=="on")document.getElementById('ihda').checked=true;
if(query_args['console_on']=="on")document.getElementById('console_on').checked=true;
if(query_args['adlib']=="on")document.getElementById('adlib').checked=true;
if(query_args['gus']=="on")document.getElementById('gus').checked=true;
if(query_args['nodefaults']=="on")document.getElementById('nodefaults').checked=true;
if(query_args['vga']=='std_vga')document.getElementById('std_vga').checked=true;
else if(query_args['vga']=='cirrus_vga')document.getElementById('cirrus_vga').checked=true;
else if(query_args['vga']=='virtio_svga')document.getElementById('virtio_svga').checked=true;
else document.getElementById('vmware_svga').checked=true;
if(query_args['ctrl_grab']=='on')document.getElementById('ctrl_grab').checked=true;
if(query_args['cpu']!=='def' && query_args['cpu']!==undefined)document.getElementById('cpu').value=query_args['cpu']
if(query_args['memsize']!==undefined)document.getElementById('memsize').value=query_args['memsize'];
if(query_args['hpet']=="on")document.getElementById('hpet').checked=true;
if(query_args['acpi']=="on")document.getElementById('acpi').checked=true;
if(query_args['fullscreen']=="on")document.getElementById('fullscreen').checked=true;
if(query_args['tablet']=="on")document.getElementById('tablet').checked=true;
if(query_args['vmport']=="on")document.getElementById('vmport').checked=true;
if(query_args['noquit']=="on")document.getElementById('noquit').checked=true;
if(query_args['2k']=="on")document.getElementById('2k').checked=true;
if(query_args['noac']=="on")document.getElementById('noac').checked=true;
if(query_args['hax']=="on")document.getElementById('hax').checked=true;
if(query_args['tcg']=="on")document.getElementById('tcg').checked=true;
if(query_args['whpx']=="on")document.getElementById('whpx').checked=true;
if(query_args['kvm']=="on")document.getElementById('kvm').checked=true;
if(query_args['bios']!=='def' && query_args['bios']!==undefined)document.getElementById('bios').value=query_args['bios']

//fix start
if(query_args['other_params']!==undefined)document.getElementById('other_params').value=query_args['other_params'].replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ').replace('+',' ');
//fix end
