// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var tr = document.createElement("tr");
  
  var li = document.createElement("td")
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  var td = document.createElement("td");
  var inputDate = document.getElementById("date").value;
  var z = document.createTextNode(inputDate);
  td.appendChild(z)

  if (inputValue === '' || inputDate === '') {
    alert("Você deve inserir algo!!");
  } else {
    document.getElementById("tabela").appendChild(tr);
    document.getElementById("tabela").appendChild(li);
    document.getElementById("tabela").appendChild(td)
  }
}