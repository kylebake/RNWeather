import { Weather, WeatherDetail } from 'types/Weather'

// TODO: obfuscate this in an environment variable
const OPEN_WEATHER_API_KEY = '5b448cd438e7eb1bff29cc52edb859ef'

const baseWeatherUrl = 'https://api.openweathermap.org/data/2.5'
const baseIconUrl = 'https://openweathermap.org/img/wn'

const Endpoints = {
  weatherUrl: `${baseWeatherUrl}/weather`,
  iconUrl: (icon: string) => `${baseIconUrl}/${icon}@2x.png`,
}

const buildCityWeatherUrl = (city: string) => {
  const { weatherUrl } = Endpoints

  const searchParams = new URLSearchParams({
    q: city,
    units: 'imperial',
    appid: OPEN_WEATHER_API_KEY,
  })

  return `${weatherUrl}?${searchParams}`
}

const buildWeatherIconUrl = (weatherDetail: WeatherDetail) =>
  Endpoints.iconUrl(weatherDetail.icon)

const getWeatherForCity = async (city: string): Promise<Weather> => {
  const url = buildCityWeatherUrl(city)

  try {
    const weatherResponse = await fetch(url)

    if (!weatherResponse.ok)
      throw new Error(`Get weather call failed: ${weatherResponse.status}`)

    const weather: Weather = await weatherResponse.json()

    return weather
  } catch (e) {
    // TODO: Log to analytics
    throw e
  }
}

export const WeatherApi = {
  getWeatherForCity,
  buildWeatherIconUrl,
}
