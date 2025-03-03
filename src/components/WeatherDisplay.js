import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const WeatherDisplay = ({ weather }) => {
  if (!weather || !weather.location) return null;

  return (
    <Card style={{ marginTop: "16px" }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {weather.location.name}, {weather.location.country}
        </Typography>
        <Typography variant="body1">
          Temperature: {weather.current.temp_c}°C
        </Typography>
        <Typography variant="body1">
          Condition: {weather.current.condition.text}
        </Typography>
        <img src={weather.current.condition.icon} alt="weather-icon" />
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay;
