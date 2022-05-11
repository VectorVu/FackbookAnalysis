import ChartAndInfor from "../components/chartAndInfor.js";
class SouthAmericaScreen {
    $container;
    $chartEle;
    $chart;
    $informationList;
    $Peru;
    $Argentina;
    $Brazil;
    $Colombia;
    $Chile;

    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("mainScreen");
        this.$chartEle = document.createElement("canvas");
        this.$chartEle.id = "SaChart";
        this.$chartEle.classList.add("chart");
        this.$informationList = document.createElement("div");
        this.$informationList.classList.add("Des-list");

        this.$Peru = new ChartAndInfor('peru', '27 242 200', 'Peru', '80%', 'men - 52.1%', '25 to 34', '7 900 000', ' 25 to 34', '4 200 000');
        this.$Argentina = new ChartAndInfor('argentina', '33 041 000', 'Argentina', '71.1%', 'women - 52.4%', '25 to 34', '9 400 000', '65+', '962 000');
        this.$Brazil = new ChartAndInfor('brazil', '136 700 000', 'Brazil', '62.9%', 'women - 53.7%', '25 to 34', '36 900 000', '45 to 54', '8 500 000');
        this.$Colombia = new ChartAndInfor('colombia', '38 112 800', 'Colombia', '74.2%', 'women - 51.2%', '25 to 34', '11 000 000', '35 to 44', '3 400 000');
        this.$Colombia.$leftCol.innerHTML = `<div style="display:block; margin: 0 auto; max-width:550px;" rel="dofollow">
        <img src="./images/colombia.PNG"
        alt="Facebook users in Indonesia"
        style="width: 100%; height: auto !important;-ms-interpolation-mode: bicubic; border: 1px solid #f5f5f5; box-shadow: 3px -1px 28px 10px rgba(229,229,229,1);"/></div>`
        this.$Chile = new ChartAndInfor('chile', '14 401 300', 'Chile', '76.6%', 'women - 51.3%', '25 to 34', '4 400 000', '55 to 64', '691 500');


    }
    render(appEle) {
        this.$informationList.append(this.$Brazil.render(), this.$Colombia.render(), this.$Argentina.render(), this.$Peru.render(), this.$Chile.render());
        this.$container.append(this.$chartEle, this.$informationList);

        appEle.appendChild(this.$container);
    }
}
export default SouthAmericaScreen;