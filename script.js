var API = "7809a700ea74dde19676d71f203bc21d";
var searchform = document.querySelector('#searchform');

searchform.addEventListener('click', function(e) {
    e.preventDefault();
    var search = document.querySelector('#city').value;
getForecast(search);
})

function getForecast(city){
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var city = data.name;
            var temp = data.main.temp;
            var desc = data.weather[0].description;
            var icon = data.weather[0].icon;
            var iconurl = `http://openweathermap.org/img/w/${icon}.png`;
            document.querySelector('#city').innerHTML = city;
            document.querySelector('#temp').innerHTML = temp;
            document.querySelector('#desc').innerHTML = desc;
            document.querySelector('#icon').src = iconurl;
            document.querySelector('#humid').innerHTML = data.main.humidity;
            
        })
        .catch(err => alert("Wrong city name!"));
}
