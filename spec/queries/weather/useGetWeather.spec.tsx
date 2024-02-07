import { renderHook, waitFor } from '@testing-library/react-native'
import { WeatherApi } from 'api/WeatherApi'
import { WeatherKeys } from 'queries/weather/WeatherKeys'
import { useGetWeather } from 'queries/weather/useGetWeather'
import { TestQueryHelper } from '../TestQueryHelper'

jest.mock('api/WeatherApi', () => ({
  WeatherApi: {
    getWeatherForCity: jest.fn().mockResolvedValue({} as any),
  },
}))

const mockedWeatherApi = jest.mocked(WeatherApi)

describe('queries/weather/useGetWeather', () => {
  const setupHook = (city?: string) =>
    renderHook(() => useGetWeather(city), { wrapper: TestQueryHelper.wrapper })

  beforeEach(() => {
    mockedWeatherApi.getWeatherForCity.mockClear()
  })

  it('calls WeatherApi with given city', async () => {
    const city = 'Denver'

    const { result } = setupHook(city)

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(mockedWeatherApi.getWeatherForCity).toHaveBeenCalledWith(city)
  })

  it('is not enabled if no city is given', async () => {
    const { result } = setupHook()

    await waitFor(() => expect(result.current.status === 'pending'))
    await waitFor(() => expect(result.current.fetchStatus === 'idle'))

    expect(mockedWeatherApi.getWeatherForCity).not.toHaveBeenCalled()
  })

  it('throws an error if no city is given and tries to fetch', async () => {
    const { result } = setupHook()

    result.current.refetch()

    await waitFor(() => expect(result.current.isError).toBe(true))

    expect(result.current.error).toEqual(new Error('City cannot be undefined'))
    expect(mockedWeatherApi.getWeatherForCity).not.toHaveBeenCalled()
  })

  it('uses the expected query key with the given city', async () => {
    const city = 'Columbus'
    const weatherKeySpy = jest.spyOn(WeatherKeys, 'getCityWeather')

    const { result } = setupHook(city)

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(weatherKeySpy).toHaveBeenCalledWith(city)
  })
})
