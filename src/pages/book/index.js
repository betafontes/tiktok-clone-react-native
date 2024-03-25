import { View, StyleSheet, Text } from "react-native"

export function Book() {
  return (
    <View styles={styles.container}>
      <Text>Página de materiais</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
