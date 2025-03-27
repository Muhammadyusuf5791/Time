setInterval(setAsosiy, 1000);

const milSoat = document.querySelector('[bu-soat-mili]');
const milMinut = document.querySelector('[bu-minut-mili]');
const milSekund = document.querySelector('[bu-sekund-mili]');

function setAsosiy() {
    const currentDate = new Date();
    const sekondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (sekondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12; 

    setRotation(milSekund, sekondsRatio);
    setRotation(milMinut, minutesRatio);
    setRotation(milSoat, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setAsosiy();
