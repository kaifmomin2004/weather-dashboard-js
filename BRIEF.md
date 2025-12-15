# Resume Project: Weather Dashboard

## The Objective

Build a professional weather application that fetches real-time data from an API.

## The API (Open-Meteo)

We will use **Open-Meteo**. It is free and requires NO API Key.
**Example URL**:
`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true`

## Features

### 1. The Search

- User types a City Name.
- **Challenge**: The Weather API needs _Coordinates_ (Latitude/Longitude), not city names.
- **Solution**: We first use a _Geocoding API_ (also Open-Meteo) to find the Lat/Long of "London", then ask for the weather at those coordinates.

### 2. The Display

- Current Temperature (°C).
- Wind Speed.
- A nice icon (Sun/Cloud/Rain).

## Project Structure

- `index.html`: The Dashboard (Sidebar for search, Main area for results).
- `style.css`: Glassmorphism or modern flat design.
- `script.js`:
  - `async function searchCity(name)`
  - `async function getWeather(lat, long)`

## Step 1: The "Fetch" Experiment

Before building the UI, try this in your browser console:

```javascript
fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
```

See if you get the data!
