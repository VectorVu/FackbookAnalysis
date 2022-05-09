class AsiaScreen{
    $container;
    $chartEle;
    $chart;
    $description;

    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("mainScreen");
        this.$chartEle = document.createElement("canvas");
        this.$chartEle.id="AsChart";
        this.$chartEle.classList.add("chart");
        this.$description = document.createElement("div");
        this.$description.innerText = "Thông tin chi tiết ở đây"
    }
    render(appEle) {
        this.$container.append(this.$chartEle, this.$description);
       
        appEle.appendChild(this.$container);
    }
}
export default AsiaScreen;