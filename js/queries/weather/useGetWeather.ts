import { useQuery } from '@tanstack/react-query'
import { WeatherApi } from 'api/WeatherApi/WeatherApi'
import { WeatherKeys } from './WeatherKeys'

export const useGetWeather = (city?: string) =>
  useQuery({
    queryKey: WeatherKeys.getCityWeather(city),
    queryFn: () => {
      if (!city) throw new Error('City cannot be undefined')

      return WeatherApi.getWeatherForCity(city)
    },
    enabled: city != null,
  })
