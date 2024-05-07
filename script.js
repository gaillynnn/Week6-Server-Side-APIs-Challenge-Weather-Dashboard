var API = "7809a700ea74dde19676d71f203bc21d";
var searchform = document.querySelector('#searchform');

searchform.addEventListener('click', function (e) {
    e.preventDefault();
    var search = document.querySelector('#city').value;
    getForecast(search);
    fivedayForecast(search);
})

function getForecast(city) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=imperial`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data, data.name);
            var city = data.name;
            var temp = data.main.temp;
            var desc = data.weather[0].description;
            var icon = data.weather[0].icon;
            var iconurl = `http://openweathermap.org/img/w/${icon}.png`;
            console.log(city)
            document.querySelector("#cityname").innerHTML = city;
            document.querySelector('#temp').innerHTML = temp;
            document.querySelector('#desc').innerHTML = desc;
            document.querySelector('#icon').src = iconurl;
            document.querySelector('#humid').innerHTML = data.main.humidity;

        })
      
}


function fivedayForecast(city) {
    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}&units=imperial`;
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("Five",data);
            var j = 1
            for (var i = 0; i < data.list.length; i = i + 8) {
                var date = data.list[i].dt_txt;
                var temp = data.list[i].main.temp;
                var desc = data.list[i].weather[0].description;
                var icon = data.list[i].weather[0].icon;
                var iconurl = `http://openweathermap.org/img/w/${icon}.png`;
                var humidity = data.list[i].main.humidity;


                document.querySelector(`#date${j}`).innerHTML = date;
                document.querySelector(`#temp${j}`).innerHTML = temp;
                document.querySelector(`#desc${j}`).innerHTML = desc;
                document.querySelector(`#icon${j}`).src = iconurl;
                document.querySelector(`#humid${j}`).innerHTML = humidity;
                j++

            }
        })
}



getForecast("chicago");
fivedayForecast('chicago');
