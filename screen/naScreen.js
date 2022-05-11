import ChartAndInfor from "../components/chartAndInfor";
class NorthAmericaScreen{
    $container;
    $chartEle;
    $chart;
    $informationList;
    $DominicanRepublic;
    $Mexico;
    $UnitedStates; 
    $Canada;
    $ElSalvador;

    // $thongtin;
    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("mainScreen");
        this.$chartEle = document.createElement("canvas");
        this.$chartEle.id="NaChart";
        this.$chartEle.classList.add("chart");
        this.$informationList = document.createElement("div");
        this.$informationList.classList.add("Des-list");
        
        this.$DominicanRepublic = new ChartAndInfor('dominican_republic', '6 885 800', 'Dominican Republic', '60.6%', 'men - 50.1%', '25 to 34', '2 200 000', '18 to 24', '841 100');
        this.$Mexico = new ChartAndInfor('mexico', '100 000 000', 'Mexico', '72.9%', 'women - 51.5%', '25 to 34', '29 400 000', '35 to 44', '8 900 000');
        this.$UnitedStates = new ChartAndInfor('united_states_of_america', '204 000 000', 'United States of America', ' 60.5%', 'women - 54.5%', ' 25 to 34', '49 100 000', '65+', '10 700 000');
        this.$Canada = new ChartAndInfor('canada', '22 792 200', 'Canada', '59.5%', 'women - 53.8%', '25 to 34', '5 500 000', '65+', '1 200 000');
        this.$ElSalvador = new ChartAndInfor('el_salvador', '4 420 800', 'El Salvador', '66.9%', 'women - 50.7%', '25 to 34', '1 331 000', '45 to 54', '223 100');
        

        // vi du 
        // this.$thongtin = document.createElement("p");
        // this.$thongtin.innerText = "thoong tin chi tiet ......";
        
        
    }
    render(appEle) {
        // this.$description.append(this.$thongtin);
        this.$informationList.append(this.$DominicanRepublic.render(), this.$Mexico.render(), this.$UnitedStates.render(), this.$Canada.render(), this.$ElSalvador.render());
        this.$container.append(this.$chartEle, this.$informationList);
       
        appEle.appendChild(this.$container);
    }
}
export default NorthAmericaScreen;