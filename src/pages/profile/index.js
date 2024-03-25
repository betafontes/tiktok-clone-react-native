import { View, StyleSheet, Text } from "react-native"

export function Profile() {
  return (
    <View styles={styles.container}>
      <Text>Página Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
