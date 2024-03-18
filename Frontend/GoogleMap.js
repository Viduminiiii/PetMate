import React from "react";
import { View, Text, StyleSheet } from "react-native";
/*
Use to embed interactive maps into the application
PROVIDER_GOOGLE - Specifies that the Google Maps API is use as the map provider
*/
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const GoogleMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 6.9265707279464, // Indicates the north-south position on the Earth's surface.
          longitude: 79.86142018841134, // Indicates the east-west position on the Earth's surface.
          latitudeDelta: 0.02, // Indicates the zoom level of the map along the latitude axis.
          longitudeDelta: 0.02, // Indicates the zoom level of the map along the longitude axis.
        }}
      ></MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    /*
    This sets the positioning properties to "absolute" and the top, bottom, left and right
    properties to 0 for effectively cover the entire map container.
    */
    ...StyleSheet.absoluteFillObject,
    flex: 1, // Use to fill the all available space.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    /*
    This sets the positioning properties to "absolute" and the top, bottom, left and right
    properties to 0 for effectively cover the entire map.
    */
    ...StyleSheet.absoluteFillObject,
  },
});

export default GoogleMap;
