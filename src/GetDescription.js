import { TimeContainer } from "./TimeContainer";
//this is getDescription container
export const getWeatherDescription=(code)=>{
  
    const weatherMap = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    80: "Rain showers",
    82: "Violent rain showers",
    95: "Thunderstorm",
    99: "Thunderstorm with hail",
  };

  return weatherMap[code]||"Unknown";
};

const weatherBg={
  clear: [0,1,2],          
  overcast: [3],             
  fog: [45,48],             
  drizzle: [51,53,55],     
  rain: [61,63,65,66,67,80,81, 82], 
  snow: [71,73,75,77,85,86],        
  thunder: [95,96,99]      
};

const weatherGifMap = {
  clear: "/assets/sunny1.gif",
  overcast: "/assets/cloudy.gif",
  drizzle: "/assets/rainy.gif",
  rain: "/assets/rainy.gif",
  snow: "/assets/snow.gif",
  thunder: "/assets/thunderstorm.gif",
  fog: "/assets/cloudy.gif",
};

export function getWeatherGif(code) {
  for (let key in weatherBg) {
    if (weatherBg[key].includes(code)) {
      return weatherGifMap[key];
    }
  }
  return "./assets/snow.gif"; // fallback
}