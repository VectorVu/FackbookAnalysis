import ChartAndInfor from "../components/chartAndInfor";

class OceaniaScreen{
    $container;
    $chartEle;
    $chart;
    $informationList;
    $Samoa;
    $NewZealand;
    $Australia;
    $Fiji;
    $SolomonIslands;

    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("mainScreen");
        this.$chartEle = document.createElement("canvas");
        this.$chartEle.id="OcChart";
        this.$chartEle.classList.add("chart");
        this.$description = document.createElement("div");
        this.$informationList = document.createElement("div");
        this.$informationList.classList.add("Des-list");

        this.$Samoa = new ChartAndInfor('samoa', '132 700', 'Samoa', '65%', 'women - 52.9%', '25 to 34', '35 900', '25 to 34', '16 400');
        this.$NewZealand = new ChartAndInfor('new_zealand', '3 394 500', 'New Zealand', '67.8%', 'women - 52.9%', '25 to 34', '826 700', '65+', '155 900');
        this.$Australia = new ChartAndInfor('australia', '16 429 300', 'Australia', '62.6%', 'women - 53.2%', '25 to 34', '4 000 000', '65+', '789 100');
        this.$Fiji = new ChartAndInfor('fiji', '624 600', 'Fiji', '66.7%', 'men - 51.2%', '25 to 34', '177 100', '25 to 34', '93 000');
        this.$SolomonIslands = new ChartAndInfor('solomon_islands', '145 300', 'Solomon Islands', '21.5%', 'men - 53.8%', '18 to 24', '53 500', '35 to 44', '12 600');
        


    }
    render(appEle) {
        this.$informationList.append(this.$Samoa.render(), this.$NewZealand.render(), this.$Australia.render(), this.$Fiji.render(), this.$SolomonIslands.render());
        this.$container.append(this.$chartEle, this.$informationList);
       
        appEle.appendChild(this.$container);
    }
}
export default OceaniaScreen;