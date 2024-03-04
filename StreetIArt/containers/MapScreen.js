import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";


function MapScreen() {
  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MapView style={styles.map}
      initialRegion={{
        //Bordeaux
        latitude: 44.837789,
        longitude: -0.57918,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }} >
         <Marker coordinate = {{latitude: 44.837789,longitude: -0.57918}}
         pinColor = {"purple"}  
         title={"Oeuvre cool"}
         description={"C'est vraiment cool"}/>
             <Marker coordinate = {{latitude: 50.837789,longitude: -1.57918}}
         pinColor = {"purple"}  
         title={"Oeuvre cool"}
         description={"C'est vraiment cool"}/>
      </MapView>
    </View>
  );
}

export default MapScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

