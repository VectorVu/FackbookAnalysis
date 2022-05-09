
const main = document.getElementById("mainChart");

let xValues = ["Asia", "Africa", "Europe", "North America", "South America", "Australia"];
let yValues = [55, 49, 44, 24, 15, 25];
let barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145",
    "#111222"
];

new Chart(main, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
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
