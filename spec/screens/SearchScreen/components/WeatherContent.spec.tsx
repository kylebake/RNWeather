import { render, screen } from '@testing-library/react-native'
import { WeatherContent } from 'screens/SearchScreen/components/WeatherContent'

describe('screens/SearchScreen/components/WeatherContent', () => {
  const setupComponent = (labelText: string, valueText: string) =>
    render(<WeatherContent labelText={labelText} weatherValue={valueText} />)

  it('displays passed in label and value', () => {
    setupComponent('some label text', 'other value %')

    expect(screen.getByText('some label text')).toBeOnTheScreen()
    expect(screen.getByText('other value %')).toBeOnTheScreen()
  })
})
