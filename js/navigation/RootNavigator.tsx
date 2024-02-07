import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SearchScreen } from 'screens/Search/SearchScreen'

const Stack = createNativeStackNavigator()

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='SearchScreen' component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
