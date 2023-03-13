import React from "react";
import { StyleSheet, View } from "react-native";
import Contador from "./src/components/Contador";

export default function App() {
  return (
    <View style={styles.container}>
      <Contador limite={10} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});