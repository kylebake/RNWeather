import { WeatherKeys } from 'queries/weather/WeatherKeys'

describe('queries/weather/WeatherKeys', () => {
  describe('all', () => {
    it('returns array with expected top key value', () => {
      const result = WeatherKeys.all

      expect(result).toEqual(['weather'])
    })
  })

  describe('getCityWeather', () => {
    it('returns expected array for a given city', () => {
      const city = 'Columbus'

      const result = WeatherKeys.getCityWeather(city)

      expect(result).toEqual(['weather', 'city_weather', 'Columbus'])
    })
  })
})
