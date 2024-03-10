const url = 'https://api.openweathermap.org/data/2.5/weather?'
const icon_url = 'http://openweathermap.org/img/wn/'
const api_key = 'n/a'

const temp_span = document.querySelector('#temp')
const speed_sapn = document.querySelector('#speed')
const direction_span = document.querySelector('#direction')
const description_span = document.querySelector('#description')
const icon_img = document.querySelector('img')

const getLocation = () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.querySelector('#lat').innerHTML = position.coords.latitude.toFixed(3) + ', '
            document.querySelector('#lng').innerHTML = position.coords.longitude.toFixed(3)
            console.log("lat long fine ")
            getWeather(position.coords.latitude, position.coords.longitude)
        }),(error => {
            alert(error)
        })
    }
    else {
        alert("Your browser does not support geolocation!")
    }
}

const getWeather = (lat, lng) => {
    const address = url +
    'lat=' + lat + 
    '&lon=' + lng +
    '&units=metric' +
    '&appid=' + api_key

    console.log(address)
    axios.get(address)
        .then(response => {
            const json = response.data
            temp_span.innerHTML = json.main.temp + '&#8451;'
            speed_sapn.innerHTML = json.wind.speed + ' m/s'
            direction_span.innerHTML = json.wind.deg + '&#176; ' + getCompassDirection(json.wind.deg) 
            description_span.innerHTML = json.weather[0].description 
            const image = icon_url + json.weather[0].icon + '@2x.png'
            icon_img.src = image
        }).catch(error => {
            alert(error)
        })
}

const getCompassDirection = (degrees) => {
if(degrees < 22.6 || degrees > 337.5) {
    return "North"
} else if(degrees < 67.6) {
    return "NorthEast"
} else if(degrees < 112.6) {
    return "East"
} else if(degrees < 157.6) {
    return "SouthEast"
} else if(degrees < 202.6) {
    return "South"
} else if(degrees < 247.6) {
    return "SouthWest"
} else if (degrees < 292.6) {
    return "West"
} else if (degrees < 337.6) {
    return "NorthWest"
}
return "Value did not match any direction."
}

getLocation()