import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RootNavigator } from 'navigation/RootNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const queryClient = new QueryClient()

const App = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}

export default App
