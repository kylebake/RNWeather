import {
  render,
  screen,
  userEvent,
} from '@testing-library/react-native'
import { useGetWeather } from 'queries/weather/useGetWeather'
import { SearchScreen } from 'screens/SearchScreen/SearchScreen'
import { WeatherData } from '../../fixtures/Weather'

jest.mock('queries/weather/useGetWeather', () => ({
  useGetWeather: jest.fn().mockReturnValue({}),
}))
const mockedGetWeather = jest.mocked(useGetWeather)

jest.useFakeTimers()

describe('screens/SearchScreen/SearchScreen', () => {
  const setupComponent = () => render(<SearchScreen />)

  beforeEach(() => {
    mockedGetWeather.mockReturnValue({
      data: WeatherData,
    } as any)
  })

  it('searching for a city displays the result component', async () => {
    setupComponent()

    const user = userEvent.setup()

    const input = screen.getByPlaceholderText('City')
    await user.type(input, 'Columbus', { submitEditing: true })

    expect(screen.getByLabelText('weather-results')).toBeOnTheScreen()
  })
})
