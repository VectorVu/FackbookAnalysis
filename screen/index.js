import MainScreen from "./mainScreen.js"
import AsiaScreen from "./asiaScreen.js";
import AfricaScreen from "./africaScreen.js";
import EuScreen from "./euScreen.js";
import NorthAmericaScreen from "./naScreen.js";
import SouthAmericaScreen from "./saScreen.js";
import OceaniaScreen from "./ocScreen.js";
// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

class App {
    $activeScreen;
    constructor() {
        let screen = new MainScreen();
        this.changeActiveScreen(screen);
        const main = document.getElementById("mainChart");
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
function createChart(id, xValues, yValues, colors) {
    if (id !== "mainChart") {
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
                    text: "World Wine Production 2022"
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
    switch (id) {
        case 'As':
            screen = new AsiaScreen();
            app.changeActiveScreen(screen);
            const As = document.getElementById("AsChart");
            xValues = ["Vietnam", "Indonesia", "India", "Philippines", "Thailand"];
            yValues = [70, 129, 392, 82, 50, 0];
            barColors = [
                "#b91d47",
                "#00aba9",
                "#2b5797",
                "#e8c3b9",
                "#1e7145",
            ];
            createChart(As.id, xValues, yValues, barColors);
            break;
        case 'Af':
            screen = new AfricaScreen();
            app.changeActiveScreen(screen);
            const Af = document.getElementById("AfChart");
            xValues = ["Nigeria", "South Africa", "Egypt", "Morocco", "Tunisia"];
            yValues = [2.5, 3.3, 4.8, 2.6, 1.9, 0];
            barColors = [
                "#b91d47",
                "#00aba9",
                "#2b5797",
                "#e8c3b9",
                "#1e7145",
            ];
            createChart(Af.id, xValues, yValues, barColors);
            break;
        case 'Eu':
            screen = new EuScreen();
            app.changeActiveScreen(screen);
            const Eu = document.getElementById("EuChart");
            xValues = ["Germany", "Turkey", "United Kingdom", "France", "Italy"];
            yValues = [37.4, 44, 44, 38.5, 34.9, 0];
            barColors = [
                "#b91d47",
                "#00aba9",
                "#2b5797",
                "#e8c3b9",
                "#1e7145",
            ];
            createChart(Eu.id, xValues, yValues, barColors);
            break;
        case 'Na':
            screen = new NorthAmericaScreen();
            app.changeActiveScreen(screen);
            const Na = document.getElementById("NaChart");
            xValues = ["Dominican Republic", "Mexico", "United States", "Canada", "El Salvador"];
            yValues = [5.1, 78, 240, 23, 3.4, 0];
            barColors = [
                "#b91d47",
                "#00aba9",
                "#2b5797",
                "#e8c3b9",
                "#1e7145",
            ];
            createChart(Na.id, xValues, yValues, barColors);
            break;
        case 'Sa':
            screen = new SouthAmericaScreen();
            app.changeActiveScreen(screen);
            const Sa = document.getElementById("SaChart");
            xValues = ["Peru", "Argentina", "Brazil", "Colombia", "Chile"];
            yValues = [20, 30, 139, 29, 13, 0];
            barColors = [
                "#b91d47",
                "#00aba9",
                "#2b5797",
                "#e8c3b9",
                "#1e7145",
            ];
            createChart(Sa.id, xValues, yValues, barColors);
            break;
        case 'Oc':
            screen = new OceaniaScreen();
            app.changeActiveScreen(screen);
            const Oc = document.getElementById("OcChart");
            xValues = ["Samoa", "New Zealand", "Australia", "Fiji", "Solomon Islands"];
            yValues = [0.13, 3.5, 17.7, 0.6, 0.13, 0];
            barColors = [
                "#b91d47",
                "#00aba9",
                "#2b5797",
                "#e8c3b9",
                "#1e7145",
            ];
            createChart(Oc.id, xValues, yValues, barColors);
            break;
        case "main":
            screen = new MainScreen();
            app.changeActiveScreen(screen);
            const main = document.getElementById("mainChart");
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
            createChart(main.id, xValues, yValues, barColors);
            break;
        default:
            break;
    }
}
continents.forEach(cont => cont.addEventListener("click", () => selectContinent(cont.id)));

export default app;
