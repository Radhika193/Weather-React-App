import { getWeatherGif } from "./GetDescription";
import { useState,useEffect } from "react";
//timecontainer
export function TimeContainer({ weatherCode }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const bgImage = getWeatherGif(weatherCode);

  return (
    <div
      className="time-container"
      style={{
        background: `url(${bgImage}) no-repeat center center/cover`,
        color: "#fff",
        padding: "1rem",
        borderRadius: "10px",
        flex: "1",
        width:"350px"
      }}
    >
      <h2>{time.toLocaleTimeString()}</h2>
      <p>{time.toLocaleDateString()}</p>
    </div>
  );
}
