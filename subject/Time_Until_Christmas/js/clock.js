const clock = document.querySelector("h2#clock");

function getClock() {
    const Xmas_date = new Date("2023-12-25 00:00:00");
    const cur_date = new Date();
    const differenceInMilliseconds = Xmas_date.getTime() - cur_date.getTime();
    const differenceInDays = parseInt(differenceInMilliseconds / (1000 * 60 * 60 * 24)).toString();

    const differenceInHours = parseInt((differenceInMilliseconds / (1000 * 60 * 60)) % 24).toString();
    const differenceInMinutes = parseInt((differenceInMilliseconds / (1000 * 60)) % 60).toString();
    const differenceInSeconds = parseInt((differenceInMilliseconds / (1000)) % 60).toString();

    clock.innerText = `${differenceInDays}d ${differenceInHours}h ${differenceInMinutes}m ${differenceInSeconds}s`;
}

setInterval(getClock, 1000);
