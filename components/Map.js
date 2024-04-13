import {StyleSheet, View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  return (
        <MapView
        style={styles.map}
        mapType="mutedStandard"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      ></MapView>
  )
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Map