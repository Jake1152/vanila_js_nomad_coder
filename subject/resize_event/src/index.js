// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";

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
  windowResize: () => {
    let w = window.innerWidth;
    let body = document.getElementsByTagName("body");
    
    my_title[0].style.color = "#ffffff";
    if (w > 1200)
      body[0].style.backgroundColor = colors[0];
    else if (1200 > w && w > 1000)
      body[0].style.backgroundColor = colors[1];
    else if (1000 > w && w > 800)
      body[0].style.backgroundColor = colors[2];
    else if (800 > w && w > 400)
      body[0].style.backgroundColor = colors[3];
  }
};

window.addEventListener("resize", superEventHandler.windowResize);
