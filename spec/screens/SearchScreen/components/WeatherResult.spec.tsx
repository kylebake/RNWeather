import { render, screen } from '@testing-library/react-native'
import { useGetWeather } from 'queries/weather/useGetWeather'
import { WeatherResult } from 'screens/SearchScreen/components/WeatherResult'
import { Weather } from 'types/Weather'

jest.mock('queries/weather/useGetWeather', () => ({
  useGetWeather: jest.fn().mockReturnValue({}),
}))
const mockedUseGetWeather = jest.mocked(useGetWeather)

describe('screens/SearchScreen/components/WeatherResult', () => {
  beforeEach(() => {
    mockedUseGetWeather.mockClear()
  })

  const setupComponent = (city?: string) =>
    render(<WeatherResult city={city} />)

  describe('early returns in render', () => {
    it('renders nothing if no city is given', () => {
      setupComponent()

      expect(screen.root).toBeUndefined()
    })

    it('shows loading spinner when query is pending', () => {
      mockedUseGetWeather.mockReturnValue({
        isPending: true,
      } as any)

      setupComponent('Columbus')

      expect(screen.getByTestId('results-loader')).toBeOnTheScreen()
    })

    it('renders error text if query errors', () => {
      const error = new Error('results failed to retrieve')
      mockedUseGetWeather.mockReturnValue({
        isPending: false,
        isError: true,
        error,
      } as any)

      setupComponent('Columbus')

      expect(screen.getByText(error.message)).toBeOnTheScreen()
    })
  })

  describe('renders weather information', () => {
    const cityName = 'Columbus'

    beforeEach(() => {
      const weather: Partial<Weather> = {
        name: cityName,
        main: {
          temp: 85.25,
          feels_like: 82.81,
          humidity: 75,
          pressure: 10,
          temp_max: 90,
          temp_min: 75,
        },
        weather: [
          {
            icon: '10d',
            main: 'Cloudy',
            description: 'scattered clouds',
            id: 123,
          },
        ],
      }
      mockedUseGetWeather.mockReturnValue({
        isPending: false,
        isError: false,
        data: weather,
      } as any)
    })

    it('displays the formatted temperature', () => {
      setupComponent(cityName)

      expect(screen.getByText('85.3\u00b0F')).toBeOnTheScreen()
    })

    it('displays the formatted feels_like temperature', () => {
      setupComponent(cityName)

      expect(screen.getByText('82.8\u00b0F')).toBeOnTheScreen()
    })

    it('displays the humidity', () => {
      setupComponent(cityName)

      expect(screen.getByText('75%')).toBeOnTheScreen()
    })

    it('displays the main weather condition', () => {
      setupComponent(cityName)

      expect(screen.getByText('Cloudy')).toBeOnTheScreen()
    })

    it('displays the description for the weather condition', () => {
      setupComponent(cityName)

      expect(screen.getByText('scattered clouds')).toBeOnTheScreen()
    })

    it('renders the image with the correct icon url', () => {
      setupComponent(cityName)

      const image = screen.getByLabelText('weather-icon-image')

      expect(image.props.source.uri).toEqual(
        'https://openweathermap.org/img/wn/10d@2x.png',
      )
    })
  })
})
