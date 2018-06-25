const cityNameInp = document.querySelector('#city-to-check');
let cityTitle = document.querySelector('.city-title');
let cityCountry = document.querySelector('.city-country');
let cityTemp = document.querySelector('.city-temp');
let cityWind = document.querySelector('.city-wind');
let cityPressure = document.querySelector('.city-pressure');
let cityDataOfDay = document.querySelector('.city-data-of-day');
let cityImage = document.querySelector('.city-image');
let cityExists = false;
let name;
cityNameInp.addEventListener('keyup', checkWeather);

function loadImage(url) {
    return fetch(url)
        .then(data => data.json())
        .then(data => {
            if (data.status === "OK") {
                let reference = data.results[0].photos[0].photo_reference;
                console.log(data)
                if (reference) {
                    cityTitle.innerHTML = `${data.results[0].name},`;
                    name = data.results[0].name;
                    cityImage.style.backgroundImage = `url(https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=${reference}&key=AIzaSyAVEoBlH2p65Whg0bJsP3TeJfvTMXBqMFc)`
                    cityExists = true;
                }
            } else {
                cityExists = false;
                return false;
            }
        })
        .catch(err => console.log(err))
}

function convertDegrees(number) {
    return Math.floor(number - 273) + "℃";
}

function convertWindUnit(number) {
    return Math.floor(number * 3600 / 1000) + "km/h";
}

function leadingZero(i) {
    return (i < 10) ? '0' + i : i;
}

function getDate(callback) {
    const date = new Date();
    return `${callback(date.getDate())}.${callback(date.getMonth())}.${callback(date.getFullYear())} ${callback(date.getHours())}:${callback(date.getMinutes())}:${date.getSeconds()}`
}

function showArticle() {
    document.querySelector('.typed-city-container').classList.add('fadein')
}

function loadWeatherInformation(url) {
    return fetch(url)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            //            cityTitle.innerHTML = `${data.name},`;
            cityCountry.innerHTML = `kraj: ${data.sys.country}`;
            cityTemp.innerHTML = `temperatura: ${convertDegrees(data.main.temp)}`;
            cityWind.innerHTML = `wiatr: ${convertWindUnit(data.wind.speed)} `;
            cityPressure.innerHTML = `ciśnienie:  ${data.main.pressure} hPa`;
            cityDataOfDay.innerHTML = `dane na dzień: ${getDate(leadingZero)}`

        })
}

function checkWeather(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
        this.blur();
        document.querySelector('.preloader').style.opacity = 1;
        document.querySelector('.preloader').style.zIndex = 1;
        const reg = /^\D+$/;
        name = this.value;
        if (name != '') {
            if (reg.test(name)) {
                if (name != undefined) {

                    showArticle();
                    loadImage(`https://cors.io/?https://maps.googleapis.com/maps/api/place/textsearch/json?query=${name}&key=AIzaSyAVEoBlH2p65Whg0bJsP3TeJfvTMXBqMFc`)
                        .then(function () {
                            if (cityExists === true) {
                                loadWeatherInformation(`https://cors.io/?http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=bc4acb56e5405a03961d16e5733e0d79`)
                            } else {
                                return false;
                            }
                        })
                        .then(() => {
                            setTimeout(() => {
                                document.querySelector('.preloader').style.opacity = 0;
                                document.querySelector('.preloader').style.zIndex = -2;
                            }, 500)
                        });
                }

            }
        }
    }
}
