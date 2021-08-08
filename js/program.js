function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  //ev.target.appendChild(document.getElementById(data));

  var cln = document.getElementById(data).cloneNode(true);
  

  var par = ev.target.parentNode;
  console.log(par.id)
  if (ev.target.children.length == 0 & par.id == "grid") {
  
    cln.id = uid()
    console.log(ev.path)
    ev.target.appendChild(cln);
}
}

function removeItm(data) {

    var par = document.getElementById(data).parentNode;
    if (par.id != "sidebar") {
        var el = document.getElementById(data);
        el.remove();
    }
}

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}