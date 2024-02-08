import { SearchBar, Text } from '@rneui/themed'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'resources/colors'
import { Fonts } from 'resources/fonts'
import { WeatherResult } from './components/WeatherResult'

export const SearchScreen = () => {
  const [city, setCity] = useState<string | undefined>(undefined)
  const [searchCity, setSearchCity] = useState<string | undefined>(
    undefined,
  )

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.titleText}>Weather by City</Text>
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="City"
          value={city}
          onChangeText={setCity}
          containerStyle={styles.searchInputContainer}
          lightTheme
          inputStyle={styles.searchInputText}
          onSubmitEditing={() => {
            setSearchCity(city)
          }}
        />
      </View>
      <WeatherResult city={searchCity} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleText: {
    paddingTop: 20,
    fontSize: Fonts.size24,
    textAlign: 'center',
  },
  mainContainer: {
    flex: 1,
  },
  searchContainer: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  searchInputText: {
    color: Colors.black,
  },
  searchInputContainer: {
    width: '100%',
  },
})
