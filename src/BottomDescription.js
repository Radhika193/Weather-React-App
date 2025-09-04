import React from "react";


const BottomDescription = ({minutely}) => {
  return (
    <div className="bottom">
      <div className="desc">
        <p>Humidity</p>
        <p className="bold">{minutely?.relativehumidity_2m?.[0]}%</p>
        
      </div>
      <div className="desc">
        <p>Wind speed</p>
        <p className="bold">{minutely?.windspeed_10m?.[0]} km/h</p>
        
      </div>
      <div className="desc">
        <p>Direction</p>
        <p className="bold">{minutely?.winddirection_10m?.[0]}°</p>
        
      </div>
      <div className="desc">
        <p>Visibility</p>
        <p className="bold">{minutely?.visibility?.[0]} m</p>
        
      </div>
    </div>
    
  );
};

export default BottomDescription;