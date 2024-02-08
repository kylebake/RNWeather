import { StyleSheet, View } from 'react-native'
import { Colors } from 'resources/colors'

export const VerticalDivider = () => {
  return <View style={styles.divider} />
}

const styles = StyleSheet.create({
  divider: {
    height: '100%',
    width: 1,
    backgroundColor: Colors.lightGrey,
  },
})
