import React from "react";
import {StyleSheet, Text, View } from "react-native";

import AppRoot from "./src/AppRoot";

function App() {
  return <View style={styles.container}><Text>Hello, World !</Text></View>;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
