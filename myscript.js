var close = document.getElementById('myClose');
var button = document.getElementById('myButton');
var modal = document.getElementById('myModal');
var content = document.getElementById('myContent');



 button.onclick = function () {
    modal.style.display = "block";
   setTimeout(opacity1, 100);
 }
 close.onclick = function () {
   modal.style.display = "none";
 }
 logo.onmouseenter = function () {
   logo.style.fontSize = "60px";
 }
 function opacity1 () {
   content.style.opacity = "1";
 }
 function none() {
   modal.style.display = "none"
 }
 close.onclick = function() {
   content.style.opacity = "0"
   setTimeout(none,1000)
 }
 
 