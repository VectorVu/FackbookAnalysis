class NorthAmericaScreen{
    $container;
    $chartEle;
    $chart;
    $description;
    $thongtin;
    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("mainScreen");
        this.$chartEle = document.createElement("canvas");
        this.$chartEle.id="NaChart";
        this.$chartEle.classList.add("chart");
        this.$description = document.createElement("div");
        
        // vi du 
        this.$thongtin = document.createElement("p");
        this.$thongtin.innerText = "thoong tin chi tiet ......";

        
    }
    render(appEle) {
        this.$description.append(this.$thongtin);
        this.$container.append(this.$chartEle, this.$description);
       
        appEle.appendChild(this.$container);
    }
}
export default NorthAmericaScreen;