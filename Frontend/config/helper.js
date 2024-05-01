import { Alert } from "react-native";
import axios from "axios";
const config = require("./config");
const baseURL = config.DB_HOST + ":" + config.DB_PORT;

export async function fetchPublishableKey(keyType) {
//   console.log("----------------fetchPublishableKey : http://192.168.1.12:5001/stripe-key?keyType=pubKey");
  try {
    // console.log("URL fetch -----    " + baseURL + "/stripe-key?keyType=" + keyType); 
    await axios.get(baseURL + "/stripe-key", keyType)
    .then((result) => {
      console.log("----1   ");
      if (result) {
        console.log("----2   "+ JSON.stringify(result.data.data));
        // console.log(result);
        return JSON.stringify(result.data.data);
      }
    })
    .catch((err) => {
      console.error(err);
    });
           
  } catch (e) {
    console.warn("Unable to fetch publishable key. Is your server running?");
    Alert.alert(
      "Error",
      "Unable to fetch publishable key. Is your server running?"
    );
    return null;
  }
}


export function formatDateToYYYYMMDD(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatTimeToHHMM(timeStr) {
  const date = new Date(timeStr);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

export function formatToLabel(string) {
  const spaced = string.replace(/([A-Z])/g, ' $1').trim();
  const words = spaced.split(' ');
  const lowerCaseResult = words.join(' ').toLowerCase();
  const result = lowerCaseResult.charAt(0).toUpperCase() + lowerCaseResult.slice(1);
  return result;
}