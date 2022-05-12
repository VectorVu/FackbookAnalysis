import MainScreen from "./mainScreen.js"
import AsiaScreen from "./asiaScreen.js";
import AfricaScreen from "./africaScreen.js";
import EuScreen from "./euScreen.js";
import NorthAmericaScreen from "./naScreen.js";
import SouthAmericaScreen from "./saScreen.js";
import OceaniaScreen from "./ocScreen.js";
window.onscroll = function() {myFunction()};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

class App {
    $activeScreen;
    constructor() {
        let screen = new MainScreen();
        this.changeActiveScreen(screen);
        const main = document.getElementById("mainChart");
        const line = document.getElementById("lineChart");
        let xValues = ["Asia", "Africa", "Europe", "North America", "South America", "Oceania"];
        let yValues = [55, 49, 44, 24, 15, 25];
        let barColors = [
            "#b91d47",
            "#00aba9",
            "#2b5797",
            "#e8c3b9",
            "#1e7145",
            "#111222"
        ];
        let xValues2 = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
        let yValues2 = [276, 518, 766, 980, 1170, 1334, 1517, 1754, 1898, 2036, 2255, 2434, 2710, 2892, 2936];
        createChart(line.id, xValues2, yValues2);
        createChart(main.id, xValues, yValues, barColors);
    }
    changeActiveScreen(screen) {
        const appEle = document.getElementById("App");
        if (appEle) {
            if (this.$activeScreen) {
                appEle.innerHTML = "";
            }
            this.$activeScreen = screen;
            screen.render(appEle);
        }
    }
}
const continents = document.querySelectorAll(".Continent");
const app = new App();
function createChart(id, xValues, yValues, colors, labelName) {
    if (id !== "mainChart" && id !== "lineChart") {
        new Chart(id, {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: colors,
                    data: yValues
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: `Facebook Users in ${labelName} 2022`
                }
            }
        });
    }
    else if (id === "lineChart") {
        console.log("vo day");
        new Chart(id, {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(0,0,255,0.1)",
                    data: yValues
                }]
            },
            options: {
                legend: { display: false },
                scales: {
                    yAxes: [{ ticks: { min: 0, max: 3500 } }],
                }
            }
        });
    }
    else {
        new Chart(id, {
            type: "pie",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: colors,
                    data: yValues
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Facebook Users by Continents 2022"
                }
            }
        });
    }

}
function selectContinent(id) {
    let xValues;
    let yValues;
    let barColors;
    let screen;
    continents.forEach(cont => {
        if (cont.id !== id || cont.id === "main") {
            cont.classList.remove("active");
        }
        else {
            cont.classList.add("active");
        }
    })
    switch (id) {
        case 'As':
            screen = new AsiaScreen();
            app.changeActiveScreen(screen);
            const As = document.getElementById("AsChart");
            xValues = ["Vietnam", "Indonesia", "India", "Philippines", "Thailand"];
            yValues = [80.4, 156.1, 400.2, 94.2, 57.4, 0];
            barColors = [
                "#DB2017",
                "#b91d47",
                "#ff9933",
                "#eee",
                "#2b5797",
            ];
            createChart(As.id, xValues, yValues, barColors, "Asia");
            break;
        case 'Af':
            screen = new AfricaScreen();
            app.changeActiveScreen(screen);
            const Af = document.getElementById("AfChart");
            xValues = ["Morocco", "Nigeria", "Egypt", "South Africa", "Tunisia"];
            yValues = [22.2, 30.9, 51.2, 26.7, 8.1, 0];
            barColors = [
                "#c22229",
                "#239E46",
                "#ce1126",
                "#007954",
                "#e8000B",
            ];
            createChart(Af.id, xValues, yValues, barColors, "Africa");
            break;
        case 'Eu':
            screen = new EuScreen();
            app.changeActiveScreen(screen);
            const Eu = document.getElementById("EuChart");
            xValues = ["Italy", "United Kingdom", "Turkey", "France", "Germany"];
            yValues = [32.5, 40.5, 44.3, 35.4, 30.1, 0];
            barColors = [
                "#009344",
                "#001b69",
                "#e40310",
                "#002153",
                "#FFCE00",
            ];
            createChart(Eu.id, xValues, yValues, barColors, "Europe");
            break;
        case 'Na':
            screen = new NorthAmericaScreen();
            app.changeActiveScreen(screen);
            const Na = document.getElementById("NaChart");
            xValues = ["Dominican Republic", "Mexico", "United States", "Canada", "El Salvador"];
            yValues = [6.8, 100, 204, 22.7, 4.4, 0];
            barColors = [
                "#C81025",
                "#CF0921",
                "#002664",
                "#F70000",
                "#0047AB",
            ];
            createChart(Na.id, xValues, yValues, barColors, "North America");
            break;
        case 'Sa':
            screen = new SouthAmericaScreen();
            app.changeActiveScreen(screen);
            const Sa = document.getElementById("SaChart");
            xValues = ["Peru", "Colombia", "Brazil", "Argentina", "Chile"];
            yValues = [27, 38.1, 136.7, 33, 14.4, 0];
            barColors = [
                "#D21022",
                "#F7C700",
                "#009B3A",
                "#70A7D8",
                "#0037A1",
            ];
            createChart(Sa.id, xValues, yValues, barColors, "South America");
            break;
        case 'Oc':
            screen = new OceaniaScreen();
            app.changeActiveScreen(screen);
            const Oc = document.getElementById("OcChart");
            xValues = ["Solomon Islands", "New Zealand", "Australia", "Fiji", "Samoa"];
            yValues = [0.14, 3.3, 16.4, 0.6, 0.13, 0];
            barColors = [
                "#205831",
                "#BB1424",
                "#000087",
                "#65B9DE",
                "#C81026",
            ];
            createChart(Oc.id, xValues, yValues, barColors, "Oceania");
            break;
        case "main":
            screen = new MainScreen();
            app.changeActiveScreen(screen);
            const main = document.getElementById("mainChart");
            const line = document.getElementById("lineChart");
            xValues = ["Asia", "Africa", "Europe", "North America", "South America", "Oceania"];
            yValues = [55, 49, 44, 24, 15, 25];
            barColors = [
                "#b91d47",
                "#00aba9",
                "#2b5797",
                "#e8c3b9",
                "#1e7145",
                "#111222"
            ];
            let xValues2 = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
            let yValues2 = [276, 518, 766, 980, 1170, 1334, 1517, 1754, 1898, 2036, 2255, 2434, 2710, 2892, 2936];
            createChart(line.id, xValues2, yValues2);
            createChart(main.id, xValues, yValues, barColors);
            break;
        default:
            break;
    }
}
continents.forEach(cont => cont.addEventListener("click", () => selectContinent(cont.id)));

export default app;
