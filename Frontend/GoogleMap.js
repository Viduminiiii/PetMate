import React, { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
/*
Use to embed interactive maps into the application
PROVIDER_GOOGLE - Specifies that the Google Maps API is use as the map provider
*/
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const GoogleMap = () => {
  const mapRef = useRef(null);
  /*
  This state is use to keep track of the markers placed on the map.
  When pressing on the map its coordinates are added to the "markers" array using "setMarkers".
  This is reset the map component with the updated marker position.
  */
  const [marker, setMarker] = useState([]);
  /*
  This function is use to animating the map view to specific location
  defined by the provided latitude and longitude.
  */
  const moveToTheLocation = (latitude, longitude) => {
    mapRef.current.animateToRegion(
      {
        latitude,
        longitude,
        latitudeDelta: 0.007, // Indicates the zoom level of the map along the latitude axis.
        longitudeDelta: 0.007, // Indicates the zoom level of the map along the longitude axis.
      },
      2000 // The duration of the animation is set to 2000 milliseconds (2 seconds)
    );
  };
  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    console.log("Clicked Location's Coordinate:", coordinate);
    setMarker([coordinate]);
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 6.9265707279464, // Indicates the north-south position on the Earth's surface.
          longitude: 79.86142018841134, // Indicates the east-west position on the Earth's surface.
          latitudeDelta: 0.07, // Indicates the zoom level of the map along the latitude axis.
          longitudeDelta: 0.07, // Indicates the zoom level of the map along the longitude axis.
        }}
        onPress={handleMapPress}
      ></MapView>
      <View style={styles.google_map_places}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true} // Fetch additional details to the selected place.
          onPress={(data, details = null) => {
            // Get the details of the selected place's latitude and longitude to the console.
            console.log(JSON.stringify(details?.geometry?.location));
            // Call the moveToTheLocation function and pass the lat and lng.
            moveToTheLocation(
              details?.geometry?.location.lat,
              details?.geometry?.location.lng
            );
          }}
          query={{
            key: "AIzaSyBoVi87Vq42Lj9ZdkJpEdSMGahP9pWFvwY", // Include Google Map API key for the application.
            language: "en",
          }}
        />
      </View>
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
  google_map_places: {
    top: 20,
    width: "85%",
    position: "absolute",
    elevation: 10, // Add shadow to the search bar.
  },
});

export default GoogleMap;
