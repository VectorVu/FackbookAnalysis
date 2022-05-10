import ChartAndInfor from "../components/chartAndInfor.js";

class AsiaScreen{
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
        this.$chartEle.id="AsChart";
        this.$chartEle.classList.add("chart");
        this.$informationList = document.createElement("div");
        this.$informationList.classList.add("Des-list");

        this.$vietnam = new ChartAndInfor('viet_nam', '80 439 200', 'Viet Nam', '80.1%', 'women - 50.5%', '25 to 34', '23 900 000', '65+', '1 939 200');
        this.$india = new ChartAndInfor('india', '400 200 000', 'India', '28.2%', 'men - 75.1%', '25 to 34', '146 400 000', '65+', '7 100 000');
        this.$indo = new ChartAndInfor('indonesia', '156 100 000', 'Indonesia', '56.2%', 'men - 55.9%', '25 to 34', '50 600 000','55 to 64', '3 400 000');
        this.$phil = new ChartAndInfor('philippines')
        
    }
    render(appEle) {
       this.$informationList.append(this.$vietnam.render(), this.$india.render(), this.$indo.render(), this.$phil.render());
        this.$container.append(this.$chartEle, this.$informationList);
       
        appEle.appendChild(this.$container);
    }
}
export default AsiaScreen;