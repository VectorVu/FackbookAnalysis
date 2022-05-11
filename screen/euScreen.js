import ChartAndInfor from "../components/chartAndInfor.js";


class EuScreen{
    $container;
    $chartEle;
    $chart;
    $informationList;
    $uk;
    $tur;
    $france;
    $ger;
    $italy;

    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("mainScreen");
        this.$chartEle = document.createElement("canvas");
        this.$chartEle.id="EuChart";
        this.$chartEle.classList.add("chart");
        this.$informationList = document.createElement("div");
        this.$informationList.classList.add("Des-list");
        this.$uk = new ChartAndInfor('united_kingdom', '40 536 700', 'United Kingdom', '59.5%', 'women - 53.2%', '25 to 34', '9 900 000', '13 to 17', '736 700');
        this.$tur = new ChartAndInfor('turkey', '44 305 100', 'Turkey', '52.1%', 'men - 64.7%', '25 to 34', '13 000 000', '13 to 17', '994 900');
        this.$france = new ChartAndInfor('france', '35 467 200', 'France', '53.5%', 'women - 51.8%', '25 to 34', '9 100 000', '13 to 17', '367 200');
        this.$ger = new ChartAndInfor('germany', '30 112 400', 'Germany', '36.6%', 'men - 50.5%', '25 to 34', '8 500 000', '13 to 17', '239 800');
        this.$italy = new ChartAndInfor('italy', '32 559 400', 'Italy', '54.9%', 'men - 50.5%', '25 to 34', '6 900 000', '13 to 17', '259 400');
    }
    render(appEle) {
        this.$informationList.append(this.$tur.render(), this.$uk.render(), this.$france.render(), this.$italy.render(), this.$ger.render());
        this.$container.append(this.$chartEle, this.$informationList);
       
        appEle.appendChild(this.$container);
    }
}
export default EuScreen;