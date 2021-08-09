function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");

  var cln = document.getElementById(data).cloneNode(true);
  cln.className = ""

  var par = ev.target.parentNode;
  var par2 = par.parentNode;

  if (par.id == "grid") {
    if (ev.target.children.length != 0) {
      ev.target.innerHTML = ''
    }
    cln.id = uid()
    ev.target.appendChild(cln);
    ev.target.style.backgroundColor = cln.style.backgroundColor
  } else if (par2.id = "grid") {
    par.innerHTML = ''
    cln.id = uid()
    par.appendChild(cln);
    par.style.backgroundColor = cln.style.backgroundColor
  }
}

function removeItm(data) {

    var par = document.getElementById(data).parentNode;
    if (par.id != "sidebar") {

        var el = document.getElementById(data);
        parBackround = el.parentNode
        console.log(parBackround)
        parBackround.style.backgroundColor = ""

        el.remove();
    }
}


function removeItemBoxClick(data) {
  var par = document.getElementById(data);
  const myNode = document.getElementById(data);

  par.style.backgroundColor = ""
  myNode.innerHTML = '';

}



function addRow() {
  var content = document.getElementById("grid")
  var text = '<div class="grid-date"><input type="date"></div>'

  for (let i = 0; i < 7; i++) {
    text += '<div id="' + uid() + '" onclick="removeItemBoxClick(id)" class="grid-item" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
  }
  content.innerHTML = content.innerHTML + text;
}




const uid = function(){
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

//adds first row
addRow()