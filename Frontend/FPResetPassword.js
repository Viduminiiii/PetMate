import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";

const FPVerification = () => {
  const [code, setCode] = useState();
  const handlePress = () => {

    if (!code) {
      Alert.alert("Missing Information", "Please fill in all mandatory fields.");
      return;
    }
    console.log("All fields filled, proceed with registration.");
    console.log("Button Pressed");
  };