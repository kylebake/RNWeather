import { Image, Text } from '@rneui/themed'
import { WeatherApi } from 'api/WeatherApi/WeatherApi'
import { useGetWeather } from 'queries/weather/useGetWeather'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Colors } from 'resources/colors'
import { Fonts } from 'resources/fonts'
import { WeatherContent } from './WeatherContent'

type WeatherResultProps = {
  city?: string
}

const formatTemperature = (temperature: number) => `${temperature.toFixed(1)}\u00b0F`

export const WeatherResult = (props: WeatherResultProps) => {
  const { city } = props
  const { data: weather, isError, isPending, error } = useGetWeather(city)

  if (!city) return null
  if (isPending) return <ActivityIndicator size="large" color={Colors.blue} />
  if (isError) return <Text style={styles.errorText}>{error.message}</Text>

  const weatherConditions = weather.weather[0]
  const iconUrl = WeatherApi.buildWeatherIconUrl(weatherConditions)

  return (
    <View>
      <View style={styles.weatherConditionsContainer}>
        <Text style={styles.cityNameText}>{weather.name}</Text>
        <Image source={{ uri: iconUrl }} containerStyle={styles.weatherIconContainer} />
        <Text style={styles.weatherConditionsText}>{weatherConditions.main}</Text>
        <Text style={styles.weatherConditionsSubText}>
          {weatherConditions.description}
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <WeatherContent
          labelText="Temperature"
          weatherValue={formatTemperature(weather.main.temp)}
        />
        <WeatherContent
          labelText="Feels like"
          weatherValue={formatTemperature(weather.main.feels_like)}
        />
        <WeatherContent labelText="Humidity" weatherValue={`${weather.main.humidity}%`} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  errorText: {
    color: Colors.red,
  },
  weatherConditionsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cityNameText: {
    fontSize: Fonts.size24,
  },
  weatherConditionsText: {
    fontSize: Fonts.size18,
  },
  weatherConditionsSubText: {
    fontSize: Fonts.size14,
  },
  weatherIconContainer: {
    aspectRatio: 1,
    height: 75,
    width: 75,
    backgroundColor: Colors.grey,
  },
})
