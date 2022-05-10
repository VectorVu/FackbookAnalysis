class ChartAndInfor {
    $container;
    $leftCol;
    $rightCol;
    constructor(countryUrl, numberOfUsers, country, ratio, majority, largestAge, largestAmount, smallestAge, smallestAgeAmount) {
        this.$container = document.createElement("div");
        this.$container.classList.add("description");
        this.$rightCol = document.createElement("div");
        this.$rightCol.classList.add("Des-rightCol");
        this.$rightCol.innerHTML = `
        <article class="article">
        <header class="article-header">
        <h1 itemprop="name">Facebook users in ${country}</h1>
        <h2><time datetime="2022-04" itemprop="temporalCoverage">April 2022</time></h2>
        </header>
        <div>
        <p>There were <strong>${numberOfUsers}</strong>
        Facebook users in <strong itemprop="spatialCoverage">${country}</strong> in <strong>April 2022</strong>, which accounted for <strong>${ratio}</strong> of its entire population.</p>
        <p>The  slight majority of them were <strong>${majority}</strong>.</p>
        <p>People aged <strong>${largestAge}</strong> were the largest user group (<strong>${largestAmount}</strong>).</p>
        <p>People aged <strong>${smallestAge}</strong> were the smallest user group (<strong>${smallestAgeAmount}</strong>).</p>
        </div>
        </article>`
        this.$leftCol = document.createElement("div");
        this.$leftCol.classList.add("Des-leftCol");
        this.$leftCol.innerHTML= `<div style="display:block; margin: 0 auto; max-width:550px;" rel="dofollow">
        <img src="https://social-cdn.napoleoncat.com/i/2022/04/napoleoncat-social-media-statistics-facebook-users-in-${countryUrl}_2022_04.png"
        alt="Facebook users in ${country}"
        style="width: 100%; height: auto !important;-ms-interpolation-mode: bicubic; border: 1px solid #f5f5f5; box-shadow: 3px -1px 28px 10px rgba(229,229,229,1);"/></div>`
    }
    render(){
        this.$container.append(this.$leftCol, this.$rightCol)
        return this.$container;
    }
}
export default ChartAndInfor;

