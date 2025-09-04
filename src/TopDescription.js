import React from "react";
import { getWeatherDescription } from "./GetDescription";

const TopDescription = ({ city, current }) => {
    return (
        <div className="top">
            <div className="location">
                <p>{city}</p>
            </div>
            <div className="temp">
                <h1>{current?.temperature}<span className="degree">°C</span></h1>
            </div>
            <div className="description">
                <p>{getWeatherDescription(current?.weathercode)}</p>
            </div>
        </div>
    )
}
export default TopDescription;