const playerName = "nico";
const playerPoints = 10;
const playerDomestic = true;
const playerFat = "Nope";

// player.name
// player.points
// player.handsome
// const player = ["nico", 1212, false, "Nope"];
// console.log();

const player = {
    name: "nico",
    points: 10,
    fat: true,
};

console.log(player);
player.points += 42;
console.log(player.points);

if (player.name == player["name"])
    console.log("player.name == player[\"name\"] is same");
else
    console.log("player.name == player[\"name\"] is N.O.T same");

// player.name == player["name"]