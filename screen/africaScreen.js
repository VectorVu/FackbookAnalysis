import ChartAndInfor from "../components/chartAndInfor.js";


class AfricaScreen{
    $container;
    $chartEle;
    $chart;
    $informationList;
    $egypt;
    $saf;
    $nig;
    $moro;
    $tunis;
    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("mainScreen");
        this.$chartEle = document.createElement("canvas");
        this.$chartEle.id="AfChart";
        this.$chartEle.classList.add("chart");
        this.$informationList = document.createElement("div");
        this.$informationList.classList.add("Des-list");
        this.$egypt = new ChartAndInfor('egypt', '51 286 200', 'Egypt', '47.2%', 'men - 62.1%', '25 to 34', '15 500 000', '65+', '1 288 600');
        this.$saf = new ChartAndInfor('south_africa', '26 739 000', 'South Africa', '44.5%', 'women - 50.5%', '25 to 34', '8 000 000', '55 to 64', '998 700');
        this.$nig = new ChartAndInfor('nigeria', '30 930 800','Nigeria', '14.2%', 'men - 59.2%', '25 to 34', '10 100 000', '55 to 64', '1 067 800');
        this.$moro = new ChartAndInfor('morocco', '22 239 700', 'Morocco', '58.6%', 'men - 60.7%', '25 to 34', '6 900 000', '65+', '640 000');
        this.$tunis = new ChartAndInfor('tunisia', '8 124 700', 'Tunisia', '66.9%', 'men - 54.1%', '25 to 34', '2 400 000', '65+', '349 800');
    }
    render(appEle) {
        this.$informationList.append(this.$egypt.render(), this.$nig.render(), this.$saf.render(), this.$moro.render(), this.$tunis.render())
        this.$container.append(this.$chartEle, this.$informationList);
       
        appEle.appendChild(this.$container);
    }
}
export default AfricaScreen;