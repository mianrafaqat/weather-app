import "./App.css";
import cities from "./cities.json";
import {
  Container,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Stack,
} from "@mui/material";
import CitySearch from "./components/CitySearch";
import WeatherDisplay from "./components/WeatherDisplay";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { weather, loading, error, handleCitySelect, fetchWeather } =
    useWeather();

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom mt={4}>
        Weather App
      </Typography>

      <CitySearch cities={cities} onCitySelect={handleCitySelect} />

      <Button
        variant="contained"
        color="primary"
        onClick={fetchWeather}
        fullWidth
      >
        Get Weather
      </Button>
      <Stack direction="row" spacing={2} justifyContent="center">
        {loading && <CircularProgress style={{ marginTop: "16px" }} />}
      </Stack>
      {error && (
        <Alert severity="error" style={{ marginTop: "16px" }}>
          {error}
        </Alert>
      )}

      <WeatherDisplay weather={weather} />
    </Container>
  );
}

export default App;
