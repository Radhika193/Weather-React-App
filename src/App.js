import React, { useState } from "react";
import { fetchCoordinates, fetchWeather } from "./api";
import { useEffect } from "react";
import TopDescription from "./TopDescription";
import BottomDescription from "./BottomDescription";
import { TimeContainer } from "./TimeContainer";
import { getWeatherGif } from "./GetDescription";

function App() {

  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [time,setTime]=useState(new Date());


  useEffect(()=>{
    const timer =setInterval(()=>setTime(new Date()),1000);
    return()=>clearInterval(timer);
  },[]);


  useEffect(() => {
    if ("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(
        async (position)=>{
          const lat= position.coords.latitude;
          const lon= position.coords.longitude;
          console.log("Latitude",lat,"longitude",lon);//to check if working properly or not
          const weatherData = await fetchWeather(lat, lon);
          setData(weatherData);
          
        },
        (error) => {
          console.warn("geolocation denied or unavailable", error);
          setCity("Please enter a city manually")
        }
      )
    }
  }, []);

  const searchLocation=async(event)=>{
    if (event.key==='Enter') {
      //by axios.get(url)
      //console.log(response.data) to check if api is fetching the data smoothly
      //let cityName=response.data.results[0].name;
      const coordinates=await fetchCoordinates(location);
      if (!coordinates) return;

      setCity(coordinates.name);
      const weatherData=await fetchWeather(coordinates.latitude, coordinates.longitude);
      setData(weatherData);
      setLocation('');
    }
  }

  return (
    <div className="app">
      <div className="main-container">
        {data && (
        <div className="time-container">
          <TimeContainer weatherCode={data.current_weather.weathercode} />

        </div>
        )}

        <div className="right-container">
          <div className="search">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter Location"
              onKeyDown={searchLocation}
            />
          </div>
          {data && (
            <div className="container">
              <TopDescription city={city} current={data.current_weather} />
              <BottomDescription minutely={data.minutely_15} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;


//  // Specifying the weather variables that needs to be shown in the weather-app
//   const hourlyVariables = [
//     "temperature_2m",
//     "relativehumidity_2m",
//     "windspeed_10m",
//     "winddirection_10m",
//   ];
//   const daily=[
//     "precipitation_probability_mean",
//     "sunrise",
//     "sunset"
//   ]



