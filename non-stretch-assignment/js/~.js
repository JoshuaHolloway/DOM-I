
const keys = (obj) => Object.keys(obj);
const vals = (obj) => Object.values(obj);

const qs = (str) => document.querySelector(str);
const qsAll = (str) => Array.from(document.querySelectorAll(str));

const color = (elem, color) => elem.style.color = color;

class __ {
  print(x, str="") { console.log(str, x); }
}
const _ = new __();