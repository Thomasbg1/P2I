import React from 'react';
import { View, Text, Button } from 'react-native';


function InformationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Toutes les informations relatives à l'application pourront être retrouvées ici</Text>
    </View>
  );
}

export default InformationScreen;