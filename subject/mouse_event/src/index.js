// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

let my_title = document.getElementsByTagName("h2");
const superEventHandler = {
  'mouseMoveOn': () => {
    my_title[0].innerHTML = "mouse move on";
    my_title[0].style.color = colors[1];
  },

  'mouseLeaveOut': () => {
    my_title[0].innerHTML = "mouse leave out";
    my_title[0].style.color = colors[2];
  },

  'windowResize': () => {
    my_title[0].innerHTML = "resize";
    my_title[0].style.color = colors[0];
  },

  'windowMouseRightClick': () => {
    my_title[0].innerHTML = "mouse right click";
    my_title[0].style.color = colors[3];
  },

}


window.addEventListener("resize", (superEventHandler.windowResize));
window.addEventListener("contextmenu", (superEventHandler.windowMouseRightClick));

let body = document.getElementsByTagName("body");
body[0].addEventListener("mousemove", (superEventHandler.mouseMoveOn));
body[0].addEventListener("mouseleave", (superEventHandler.mouseLeaveOut));

