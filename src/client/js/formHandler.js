
async function handleSubmit(event) {

  event.preventDefault()
  removeSearch()
  getHtml()
  const place = document.getElementById('place').value;
  let date = document.getElementById('date').value;
  const days = Client.checkDate(date);
  if(days < 7 ){
    date = new Date(date);
    date = Client.addDays(0);
  }else{
    date = Client.addDays(15);
  }
  let geoData;
  let weatherData;
  let pixaData;

  try {
    geoData = await Client.getGeo(place);
    if(Client.isEmpty(geoData))return;
    console.log(geoData);
    const lat = geoData[0].lat;
    const lon = geoData[0].lng;
    document.getElementById('country-name').innerHTML = "Country: " + geoData[0].countryName
    document.getElementById('fcode-name').innerHTML = "Description: " + geoData[0].fcodeName
    document.getElementById('lat').innerHTML = "Lat: " + geoData[0].lat
    document.getElementById('long').innerHTML = "Long: " + geoData[0].lng

    weatherData = await Client.getWeather(lat, lon);
    pixaData = await Client.getPixa(place);
    console.log(weatherData);
    console.log(pixaData);
    document.getElementById('img-place').setAttribute('src',pixaData.hits[0].previewURL)
    weatherData.data.forEach(element => {
      if(element.datetime == date){
        document.getElementById('max-temp').innerHTML = "Max. Temp:" + element.max_temp
        document.getElementById('min-temp').innerHTML = "Min. Temp:" + element.min_temp
      }else{

      }
    });

  }catch (error) {
    console.error(error);
  }
    const closeBtn = document.getElementById('close')
     closeBtn.addEventListener('click', function (event) {
      removeSearch()
      closeBtn.parentNode.remove();
})
}
function getHtml(){
  let html = `<div id="info-travel">
  <img id="img-place">
  <span id="close" class="fa fa-close"></span>
  <div class="geo-result"><label id="country-name" class=""></label></div>
  <div class="geo-result"><label id="fcode-name" class=""></label></div>
  <div class="geo-result">
      <label id="lat" class=""></label>
      <label id="long" class=""></label>
  </div>
  <div>
      <i class="fa fa-thermometer"></i><label id="max-temp" class="weather-items"></label>
      <i class="fa fa-thermometer"></i><label id="min-temp" class="weather-items"></label>
  </div>
  </div>`
  let results = document.getElementById('results');
  results.innerHTML= html;
  console.log('inner')
}
function removeSearch(){
  console.log('clean')
  let results = document.getElementById('results');
  results.innerHTML="";
}
export { handleSubmit}

