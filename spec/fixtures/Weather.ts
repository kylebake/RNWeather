import { Weather } from 'types/Weather'

export const WeatherData: Weather = {
  base: '1234',
  clouds: {
    all: 1,
  },
  cod: 999,
  coord: {
    lat: 10.12,
    lon: 85.99,
  },
  dt: 4321,
  id: 1,
  main: {
    feels_like: 56.43,
    temp: 60.78,
    humidity: 85,
    pressure: 10,
    temp_max: 65.38,
    temp_min: 50.23,
  },
  name: 'Columbus',
  sys: {
    country: 'US',
    id: 99,
    sunrise: 1023948,
    sunset: 1034938,
    type: 1,
  },
  timezone: 10,
  visbility: 1,
  weather: [
    {
      main: 'Cloudy',
      description: 'scattered clouds',
      icon: '10d',
      id: 1,
    },
  ],
  wind: {
    deg: 99,
    speed: 115,
  },
}
