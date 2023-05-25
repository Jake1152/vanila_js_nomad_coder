const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

function rand(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)));
}

function onClick() {
  const color1_idx = rand(0, colors.length);
  let color2_idx = 0;
  while (color2_idx === color1_idx) {
    color2_idx = rand(0, colors.length);
  }

  const color1 = colors[color1_idx];
  const color2 = colors[color2_idx];
  const deg = (rand(0, 100) / 100);
  // document.body.style.backgroundImage = `linear-gradient(0.25turn, ${color1}, ${color2})`;
  document.body.style.backgroundImage = `linear-gradient(${deg}turn, ${color1}, ${color2})`;
}

const myButton = document.querySelector("#color_btn");
myButton.addEventListener("click", onClick);

