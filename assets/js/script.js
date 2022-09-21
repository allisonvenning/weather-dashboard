// Display current date and time
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// const currentTime = moment();
// $("p.time-display").html(currentTime.format("[Today's date is: ] dddd MMMM Do, YYYY h:mm a"));

// Get weather data
var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=aa26f73e674b18c043d0974357e5a986";

fetch(apiUrl).then(function(response) {
    response.json();
})