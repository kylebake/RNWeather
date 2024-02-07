import { StyleSheet, View } from 'react-native'
import { Text } from '@rneui/themed'
import { Fonts } from 'resources/fonts'

type WeatherContentProps = {
  labelText: string
  weatherValue: string
}

export const WeatherContent = (props: WeatherContentProps) => {
  const { labelText, weatherValue } = props

  return (
    <View style={styles.weatherContainer}>
      <Text>{labelText}</Text>
      <Text style={styles.weatherValue}>{weatherValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    alignItems: 'center',
  },
  weatherValue: {
    fontSize: Fonts.size22,
  },
})
