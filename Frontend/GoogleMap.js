import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Button } from "react-native-elements";
import { useRoute } from "@react-navigation/native";

/*
Use to embed interactive maps into the application
PROVIDER_GOOGLE - Specifies that the Google Maps API is use as the map provider
*/
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

//Use to provide Google places auto complete functionality.
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

/*
This provides a set of methods that allow to request runtime permissions from the user on
Android devices.
*/
import { PermissionsAndroid } from "react-native";

// This allow to retrieve the device's location using the specific methods.
import Geolocation from "react-native-get-location";

// Use an variable to hold the imported image to use in later in the code.
const redPin = require("../AppPics/location_marker.png");

const GoogleMap = ({ navigation }) => {
  const mapRef = useRef(null); // Reference for access the MapView component methods
  const route = useRoute();
  /*
  This state is use to keep track of the markers placed on the map.
  When pressing on the map its coordinates are added to the "markers" array using "setMarkers".
  This is reset the map component with the updated marker position.
  */
  const [marker, setMarker] = useState([]);
  /*
  This state is used to track if the location permission is granted or not
  by the user.
  */
  const [permissionGranter, setPermissionGranter] = useState(false);

  const [mapInitialized, setMapInitialized] = useState(false);

  // This useEffect hook is use to perform side effects.
  useEffect(() => {
    getLocationPermission();
  }, []); // The empty array indicates this effect is runs only once after the initial render.

  /*
  This function is use to get location permission from the user and
  call the specific functions to continue the process.
  "await" can be only use functions with the "async".
  */
  async function getLocationPermission() {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "Please allow location permission to continue",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Update the state to true when permission is granted.
          setPermissionGranter(true);
          // If permission is granted, then call the getCurrentLocation() function.
          getCurrentLocation();
        } else {
          console.log("Permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    }
  }
  // Function to get the current location.
  const getCurrentLocation = () => {
    // Retrieve the current location of the device.
    Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then((location) => {
        console.log("My current location is: ", location); // Display the current location data on the console.
        // Move the map to the current location
        moveToTheLocation(location.coords.latitude, location.coords.longitude);
      })
      .catch((error) => {
        "Error getting current location:", error;
      });
  };
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
  /*
  This function is an event handling.
  This function is call when user presses on the map.
  */
  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent; // Use to get the coordinate of the user pressed location on the map.
    console.log("Clicked Coordinate:", coordinate); // Use to display the lat and long in the console.
    setMarker([coordinate]); // Use to clear the previous marker and add the new marker's coordinate.
  };

  const handleMapReady = () => {
    setMapInitialized(true);
  };

  //Use to display a messsage if the permissionGranter state is false.
  if (!permissionGranter)
    return (
      <View>
        <Text>Please allow location permission to continue</Text>
      </View>
    );

  const sendLocationToSignup = () => {
    // Pass location data back to the Signup
    route.params?.onDataReceived(marker); // marker contains the coordinates of the selected function.
    /*Use to navigate the previous screen automatically after user clicked on the
      save location button
    */
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 6.900346246480022,
          longitude: 79.85295250778287,
          latitudeDelta: 0.007, // Indicates the zoom level of the map along the latitude axis.
          longitudeDelta: 0.007, // Indicates the zoom level of the map along the longitude axis.
        }}
        onMapReady={handleMapReady}
        onPress={handleMapPress}
      >
        {marker.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker}
            image={require("../AppPics/location_marker.png")}
            style={styles.markerImage}
          ></Marker>
        ))}
      </MapView>
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
      <Button title="Save Location" onPress={sendLocationToSignup} />
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
    zIndex: 0,
  },
  google_map_places: {
    top: 20,
    width: "85%",
    position: "absolute",
    elevation: 10, // Add shadow to the search bar.
  },
  markerImage: {
    width: 50,
    height: 50,
  },
});

export default GoogleMap;
