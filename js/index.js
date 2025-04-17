async function search(city) {
  let myHttp = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=3`
  );
  let data = await myHttp.json();
  displayData(data.location, data.current);
  displayDays(data.forecast);
  console.log(data);
}

search("cairo");
document.querySelector("#searchBar").addEventListener("keyup", (a) => {
  search(a.target.value);
});
// console.log(data.forecast.forecastday[0].day.avgtemp_c);temp
// console.log(data.forecast.forecastday[0].day.condition.text);weather status
// console.log(data.forecast.forecastday[0].day.condition.icon);icon
// console.log(data.forecast.forecastday[0].day.avghumidity);humadity
// console.log(data.forecast.forecastday[0].day.avgvis_km);wind
//   console.log(data.location.name); //city name
// let x = new Date("2000-11-24");
// console.log(String(x).split(" ")[0]);day
// console.log(String(x).split(" ")[1]);month
// console.log(String(x).split(" ")[2]);date
// console.log(data.forecast.forecastday[0].date);
function displayData(loc, current) {
  let x = new Date(current.last_updated);
  console.log(x);
  let day = String(x).split(" ")[0];
  let month = String(x).split(" ")[1];
  let date = String(x).split(" ")[2];
  console.log(day);
  let cartuna = `          <div class="col-md-4">
            <div class="card h-100">
              <div
                class="header d-flex flex-row justify-content-between p-1 align-items-center"
              >
                <h3>${day}</h3>
                <h3>${date} ${month}</h3>
              </div>
              <div class="container">
                <h5>${loc.name}</h5>
                <h1>${current.temp_c}   C</h1>
                <img src="${current.condition.icon}" alt="" />
                <h3>${current.condition.text}</h3>
                <ul class="d-flex flex-row">
                  <li>
                    <div>
                      <img src="img/img-4.png" alt="" /> <span>20%</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src="img/img-3.png" alt="" /> <span>18km/h</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src="img/img-5.png" alt="" /> <span>East</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  `;
  document.getElementById("demo").innerHTML = cartuna;
}
function displayDays(forecast) {
  let cartuna = ``;
  for (let i = 1; i < forecast.forecastday.length; i++) {
    let day = String(new Date(forecast.forecastday[i].date)).split(" ")[0];
    cartuna = `<div class="col-md-4">
            <div class="card h-100">
              <div
                class="header d-flex flex-row justify-content-center p-1 align-items-center"
              >
                <h3>${day}</h3>
              </div>
              <div
                class="content d-flex flex-column align-items-center text-center"
              >
                <div class="img">
                  <img src="${forecast.forecastday[i].day.condition.icon}" alt="" />
                  <h1 class="text-white">${forecast.forecastday[i].day.avgtemp_c} c</h1>
                  <h3 class="text-white">${forecast.forecastday[i].day.mintemp_c} c</h3>
                  <h4 class="text-primary">${forecast.forecastday[i].day.condition.text}</h4>
                </div>
              </div>
            </div>
          </div>
    `;
    document.getElementById("demo").innerHTML += cartuna;
  }
}
// console.log(displayDays(forecast));
