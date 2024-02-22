"use strict";

const list = document.querySelector("ul");
let myList = document.getElementsByTagName("LI");
const listContainer = document.querySelector(".list-container");
let i;
for (i = 0; i < myList.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

const close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  const li = document.createElement("li");
  const input = document.getElementById("input-box").value;
  const t = document.createTextNode(input);
  li.appendChild(t);
  if (input === "") {
    alert("You must write something!");
  } else {
    document.getElementById("list-container").appendChild(li);
  }
  document.getElementById("input-box").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = " none";
    };
  }
}
