const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sund";

// const daysOfWeek = mon + tue + wed + thu +fri + sat + sun;
const daysOfWeek = [mon, tue, wed, thu,fri, sat, sun];
const nonsend = [1,2, "hello", true, null, true, undefined, "jake"];
console.log(daysOfWeek);


// Get Item from array
console.log(daysOfWeek[2]);


// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);