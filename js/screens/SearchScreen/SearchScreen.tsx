import { Button, Input } from '@rneui/themed'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { WeatherResult } from './components/WeatherResult'

export const SearchScreen = () => {
  const [city, setCity] = useState<string | undefined>(undefined)
  const [searchCity, setSearchCity] = useState<string | undefined>(
    undefined,
  )

  return (
    <View>
      <View style={styles.searchContainer}>
        <Input
          placeholder="City"
          value={city}
          onChangeText={setCity}
          containerStyle={styles.searchInputContainer}
        />
        <Button title="Search" onPress={() => setSearchCity(city)} />
      </View>
      <WeatherResult city={searchCity} />
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchInputContainer: {
    flex: 1,
  },
})
