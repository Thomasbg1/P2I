import React from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native';


function ItineraireScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
        <Button
        title="Go to Informations"
        onPress={() => navigation.navigate('informations')}/>
    </View>
  );
}



export default ItineraireScreen;