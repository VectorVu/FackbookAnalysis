import ChartAndInfor from "../components/chartAndInfor.js";

class AsiaScreen {
    $container;
    $chartEle;
    $chart;
    $informationList;
    $vietnam;
    $india;
    $indo;
    $phil;
    $thai;
    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("mainScreen");
        this.$chartEle = document.createElement("canvas");
        this.$chartEle.id = "AsChart";
        this.$chartEle.classList.add("chart");
        this.$informationList = document.createElement("div");
        this.$informationList.classList.add("Des-list");

        this.$vietnam = new ChartAndInfor('viet_nam', '80 439 200', 'Viet Nam', '80.1%', 'women - 50.5%', '25 to 34', '23 900 000', '65+', '1 939 200');
        this.$india = new ChartAndInfor('india', '400 200 000', 'India', '28.2%', 'men - 75.1%', '25 to 34', '146 400 000', '65+', '7 100 000');
        this.$indo = new ChartAndInfor('indonesia', '156 100 000', 'Indonesia', '56.2%', 'men - 55.9%', '25 to 34', '50 600 000', '55 to 64', '3 400 000');
        this.$indo.$leftCol.innerHTML = `<div style="display:block; margin: 0 auto; max-width:550px;" rel="dofollow">
        <img src="./images/indonesia.PNG"
        alt="Facebook users in Indonesia"
        style="width: 100%; height: auto !important;-ms-interpolation-mode: bicubic; border: 1px solid #f5f5f5; box-shadow: 3px -1px 28px 10px rgba(229,229,229,1);"/></div>`
        this.$phil = new ChartAndInfor('philippines', '94 200 000', 'Philippines', '82.9%', 'women - 53.2%', '18 to 24', '28 500 000', '65+', '3 200 000');
        this.$thai = new ChartAndInfor('thailand', '57 400 000', 'Thailand', '82.1%', 'women - 51.2%', '25 to 34', '17 900 000', '65+', '2 500 000');
    }
    render(appEle) {
        this.$informationList.append(this.$vietnam.render(), this.$india.render(), this.$indo.render(), this.$phil.render(), this.$thai.render());
        this.$container.append(this.$chartEle, this.$informationList);

        appEle.appendChild(this.$container);
    }
}
export default AsiaScreen;