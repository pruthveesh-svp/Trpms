import { Box, Typography, Grid, TextField, Button, Paper } from "@mui/material";
import axios from "axios";
import { useState, useEffect, SetStateAction } from "react";
import './App.css';




function App() {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState("");
  const currentTime = new Date();

  const [weatherData, setWeatherData] = useState<null | {
    city: any;
    country: any;
    temp: string;
    wind: string;
    humidity: string;
    windDirection: string;
    pressure: string;
    sunrise: string;
    sunset: string;
    visibility: string;
  }>(null);

  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    fetchWeatherData();
  };

  const fetchWeatherData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData({
        city: 'Dummy City',
        country: 'Dummy Country',
        temp: '20°C',
        humidity: '80%',
        pressure: '1013 hPa',
        visibility: '10 km',
        wind: '5 m/s',
        windDirection: '270°',
        sunrise: '6:00 AM',
        sunset: '6:00 PM',
      });
      setError(null);
    } catch (error: Error | any) {
      setError(error.message);
    }
  };
  
  useEffect(() => {
    fetchWeatherData();
  }, []);
  
  
  const getTimeStringFromUnixTimestamp = (unixTimestamp: number) => {
    const date = new Date(unixTimestamp * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <Box my={4}>
      <Box
        sx={{
          marginTop: "8px",
          marginBottom: "8px",
          display: "flex",
          flexDirection: "column",
          placeContent: "center",
          placeItems: "center",
          gap: "1px",
          border: "5px dashed #000000",
          padding: "2rem",
          borderRadius: "10px",
          cursor: "pointer",
          maxWidth:"lg",
          alignSelf: "center"
        }}
      >
        <input style={{ display: "none" }}></input>
        <Typography
          variant="h2"
          color="black"
          gutterBottom
          sx={{ alignContent: "center" }}
        >
          weather App
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <TextField
              fullWidth
              autoComplete="given-name"
              variant="standard"
              className="dashed-underline"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              autoComplete="family-name"
              variant="standard"
              className="dashed-underline"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ borderRadius: "15px",
            }}
              onClick={handleFormSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 600,
              marginTop: 10,
              height: 150,
              border: "2px solid black",
              borderRadius: "20px",
              marginBottom: "40px"
            },
          }}
        >
        {weatherData && (

          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 2,
            }}
          >
            {/* left side text */}
            <Box sx={{ textAlign: "left" }}>
            <Typography variant="h5" align="left">
            {city}, {country}
            </Typography>
            <Typography>AS of: {currentTime.toLocaleTimeString()}</Typography>
            <Typography sx={{marginTop:10}}>Haze</Typography>

            </Box>

            <Box sx={{ textAlign: "center" }}>
            <Typography variant="h1" align="right">{weatherData.temp}</Typography>
            </Box>

            <Box sx={{ textAlign: "left",alignItems: "flex-end" }}>
            </Box>
          </Paper>
        )}
        </Box>
        {weatherData && (
  <Grid container alignItems="center" justifyContent="center" spacing={2} maxWidth="sm">
    <Grid item xs={6}>
      <Box display="flex" justifyContent="space-between" marginTop={5} marginBottom={5}>
        <Typography variant="h5" align="left">High/Low</Typography>
        <Typography variant="h5" align="right">{weatherData.temp}</Typography>
      </Box>
      <Box textAlign="center" borderBottom="3px dashed black" className="field-box" marginY={2}></Box>
    </Grid>
    <Grid item xs={6}>
      <Box display="flex" justifyContent="space-between" marginTop={5} marginBottom={5}>
        <Typography variant="h5" align="left">Wind</Typography>
        <Typography variant="h5" align="right">{weatherData.wind}</Typography>
      </Box>
      <Box textAlign="center" borderBottom="3px dashed black" className="field-box" marginY={2}></Box>
    </Grid>
    <Grid item xs={6}>
      <Box display="flex" justifyContent="space-between" marginTop={5} marginBottom={5}>
        <Typography variant="h5" align="left">Humidity</Typography>
        <Typography variant="h5" align="right">{weatherData.humidity}</Typography>
      </Box>
      <Box textAlign="center" borderBottom="3px dashed black" className="field-box" marginY={2}></Box>
    </Grid>
    <Grid item xs={6}>
      <Box display="flex" justifyContent="space-between" marginTop={5} marginBottom={5}>
        <Typography variant="h5" align="left">Wind Direction</Typography>
        <Typography variant="h5" align="right">{weatherData.windDirection}</Typography>
      </Box>
      <Box textAlign="center" borderBottom="3px dashed black" className="field-box" marginY={2}></Box>
    </Grid>
    <Grid item xs={6}>
      <Box display="flex" justifyContent="space-between" marginTop={5} marginBottom={5}>
        <Typography variant="h5" align="left">Pressure</Typography>
        <Typography variant="h5" align="right">{weatherData.pressure}</Typography>
      </Box>
      <Box textAlign="center" borderBottom="3px dashed black" className="field-box" marginY={2}></Box>
    </Grid>
    <Grid item xs={6}>
      <Box display="flex" justifyContent="space-between" marginTop={5} marginBottom={5}>
        <Typography variant="h5" align="left">Sunrise</Typography>
        <Typography variant="h5" align="right">{weatherData.sunrise}</Typography>
      </Box>
      <Box textAlign="center" borderBottom="3px dashed black" className="field-box" marginY={2}></Box>
    </Grid>
    <Grid item xs={6}>
      <Box display="flex" justifyContent="space-between" marginTop={5} marginBottom={5}>
        <Typography variant="h5" align="left">Visibility</Typography>
        <Typography variant="h5" align="right">{weatherData.visibility}</Typography>
      </Box>
      <Box textAlign="center" borderBottom="3px dashed black" className="field-box" marginY={2}></Box>
    </Grid>
    <Grid item xs={6}>
      <Box display="flex" justifyContent="space-between" marginTop={5} marginBottom={5}>
        <Typography variant="h5" align="left">Sunset</Typography>
        <Typography variant="h5" align="right">{weatherData.sunset}</Typography>
  </Box>
  <Box textAlign="center" borderBottom="3px dashed black" className="field-box" marginY={2}></Box>
</Grid>
</Grid>
)}
      {error && <p>{error}</p>}

 
      </Box>
    </Box>
  );
}

export default App;
function setWeatherData(data: any) {
  throw new Error("Function not implemented.");
}

function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

