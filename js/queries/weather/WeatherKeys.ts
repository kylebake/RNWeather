const topWeatherKeys = 'weather'
const getCityWeatherKey = 'city_weather'

export const WeatherKeys = {
  all: [topWeatherKeys],
  getCityWeather: (city?: string) => [topWeatherKeys, getCityWeatherKey, city],
}
