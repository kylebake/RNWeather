import { OPEN_WEATHER_API_KEY, WeatherApi } from 'api/WeatherApi'
import { WeatherDetail } from 'types/Weather'

describe('spec/api/WeatherApi', () => {
  const mockFetchWithResponse = (mockResponse?: {
    ok: boolean
    json: jest.Mock
    status: number
  }) => jest.spyOn(global, 'fetch').mockResolvedValue({ ...mockResponse } as any)

  const mockFetchWithRejection = (error: Error) =>
    jest.spyOn(global, 'fetch').mockRejectedValue(error)

  describe('getWeatherForCity', () => {
    it('calls expected URL with passed in city', () => {
      const response = {
        ok: true,
        json: jest.fn().mockResolvedValue({}),
        status: 200,
      }
      const fetchMock = mockFetchWithResponse(response)
      const city = 'Test'

      const expectedUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${OPEN_WEATHER_API_KEY}`

      WeatherApi.getWeatherForCity(city)

      expect(fetchMock).toHaveBeenCalledWith(expectedUrl)
    })

    it('throws error on not-ok response with expected message', () => {
      const response = {
        ok: false,
        json: jest.fn().mockResolvedValue({}),
        status: 404,
      }
      mockFetchWithResponse(response)
      const city = 'Test'

      expect(WeatherApi.getWeatherForCity(city)).rejects.toThrow(
        new Error('Get weather call failed: 404'),
      )
    })

    it('rethrows errors on rejected API call', () => {
      const error = new Error('uh oh')
      mockFetchWithRejection(error)
      const city = 'Test'

      expect(WeatherApi.getWeatherForCity(city)).rejects.toThrow(error)
    })
  })

  describe('buildWeatherIconUrl', () => {
    it('returns the expected URL string for a given weather detail', () => {
      const icon = '1234'
      const weatherDetail: WeatherDetail = {
        description: 'some weather condition',
        icon,
        id: 1,
        main: 'cloudy',
      }
      const expectedUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

      const iconUrl = WeatherApi.buildWeatherIconUrl(weatherDetail)

      expect(iconUrl).toEqual(expectedUrl)
    })
  })
})
