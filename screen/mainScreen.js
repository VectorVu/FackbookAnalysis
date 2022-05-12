
class MainScreen {
    $container;
    $chartEle;
    $chart;
    $description;
$generalInfor;
    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("mainScreen");
        this.$chartEle = document.createElement("canvas");
        this.$chartEle.id="mainChart";
        this.$chartEle.classList.add("chart");
       this.$generalInfor = document.createElement("div");
       this.$generalInfor.classList.add("generalInfor");
       this.$generalInfor.innerHTML = `<h1 style="text-align: center;">The world largest social network</h1>
       <br>
       <p>The leading social networks are usually available in multiple languages and enable users to connect with friends or people across geographical, political, or economic borders. In 2022, Social networking sites are estimated to reach 3.96 billion users and these figures are still expected to grow as mobile device usage and mobile social networks increasingly gain traction in previously underserved markets.<p>
       <br>
       <p>With nearly 2.5 billion monthly users, Facebook is hands down the largest social media site in the world. While that practically ensures at least some of your audience regularly uses the platform, it’s developed a somewhat negative reputation amongst younger users that are increasingly turning to other alternative sites.</p>
       <br>
       <h2 style="text-align: center;">Some popular social networks worldwide as of January 2022, ranked by number of monthly active users (in millions)</h2>
       <table style="width: 60%; ">
         <tr>
           <th>Characteristic</th>
           <th style="width:50%">Number of active users in millions</th>
         </tr>
         <tr>
           <td>Facebook</td>
           <td>2910</td>
         </tr>
         <tr>
           <td>Youtube</td>
           <td>2562</td>
         </tr>
         <tr>
           <td>WhatsApp</td>
           <td>2000</td>
         </tr>
         <tr>
           <td>Instagram</td>
           <td>1478</td>
         </tr>
         <tr>
           <td>Weixin / Wechat</td>
           <td>1263</td>
         </tr>
         <tr>
           <td>Tiktok</td>
           <td>1000</td>
         </tr>
         <tr>
           <td>Snapchat</td>
           <td>557</td>
         </tr>
         <tr>
           <td>Twitter</td>
           <td>436</td>
         </tr>
         <tr>
           <td>Reddit</td>
           <td>430</td>
         </tr>
         <tr>
           <td>Quora</td>
           <td>300</td>
         </tr>
       </table>
     <h2 style="text-align: center;">Number of monthly active Facebook users worldwide from 2008 to 2022 (in millions)</h2>
     <canvas id="lineChart" class="chart"></canvas>`
    }
    render(appEle) {
        this.$container.append(this.$generalInfor, this.$chartEle);
       
        appEle.appendChild(this.$container);
    }
}
export default MainScreen;