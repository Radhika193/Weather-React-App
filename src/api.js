import axios from "axios";


export const fetchCoordinates = async (cityName) => {
    try {
        const response = await axios.get(
            `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
        )
        if (!response.data.results) return null;

        const { name, latitude, longitude } = response.data.results[0];
        return { name, latitude, longitude };
    } catch (error) {
        console.error("error in fetching coordinates:", error);
        return null;
    }
}
export const fetchWeather = async (latitude, longitude) => {
    try {
        const minutely15 = [
            "temperature_2m",
            "relativehumidity_2m",
            "windspeed_10m",
            "winddirection_10m",
            "visibility",
            "precipitation",
        ];
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&minutely_15=${minutely15}`
        const response = await axios.get(url);
        return response.data;
    } catch(error){
        console.error("error fetching the wather data",error);
        return null;
    }
}