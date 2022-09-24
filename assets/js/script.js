// Global variables
var searchBtn = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');
var currentDay = document.getElementById('today');
var forecast = document.getElementById('forecast');
var history = document.getElementById('historybtn');
// Add timezone plugins to day.js
// dayjs.extend(window.dayjs_plugin_utc);
// dayjs.extend(window.dayjs_plugin_timezone);

// Display current date and time
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// API info
var api = "http://api.openweathermap.org";
var apiKey = "aa26f73e674b18c043d0974357e5a986";

// Day JS


// Functions and their purposes:
// #1 Take value of input - validate city
function formInput(event) {
    if (!searchInput.value) {
        return;
    }
    event.preventDefault();
    var search = searchInput.value.trim();
    console.log(search);
}

// click event to start the app - go to first function
searchBtn.addEventListener('submit', formInput);

// #2 Get the coordinates of the city by a geo  API (Fetch)
function name(params) {
    
}
// #3 Take those coordinates and get the weather (fetch)
function name(params) {
    
}
// #4 Handle current weather (build card and pull the data)
function name(params) {
    
}
// #5 Forecast (iterate through array of 5 days - call out a function for the card)
function name(params) {
    
}
// #6 Create the card and pull data
function name(params) {
    
}

// #7 process the setter and getter of local storage (passing data from #2)
// #8 Get local storage and create history buttons (persistant data)

// Get weather data
var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=aa26f73e674b18c043d0974357e5a986";

fetch(apiUrl).then(function(response) {
    response.json();
})

// Get other API
// weather: https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
// city coordinates:  http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}