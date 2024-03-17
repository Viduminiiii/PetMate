
import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLocalStorage = () => {
  const [value, setValue] = useState(null)

  const setItem = async (key, value) => {
    console.log(key + " - " + value);
    try {
      await AsyncStorage.setItem(key, value);
      // console.log("-----------value:  " + value + " - " + key); 
      // console.log("Item set successfully");
      setValue(value); // Assuming setValue is defined somewhere in your code
    } catch (e) {
      console.log("Local storage error:  " + e);
    }
  };

  const getItem = async (key) => {
    try {
      const loggedInUser = await AsyncStorage.getItem(key);
      // console.log("loggedInUser:  " + loggedInUser + " - " + key);      
      setValue(loggedInUser); // Assuming setValue is defined elsewhere in your code
      // if (loggedInUser) {
      //   const foundUser = JSON.parse(loggedInUser);
      //   console.log(JSON.stringify(foundUser));
      //   setValue(foundUser); // Assuming setValue is defined elsewhere in your code
      //   return foundUser;
      // }
      // return loggedInUser;
    } catch (e) {
      console.log("error:  " + e);
    }
    return null; // Return null if no value is found
  };

  const removeItem = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log("Item removed successfully");
      setValue(null); // Assuming setValue is defined elsewhere in your code
    } catch (e) {
      console.log("Local storage error:  " + e);
    }
  };
  

  return { value, setItem, getItem, removeItem }
}
