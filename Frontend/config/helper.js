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
       
    // const key = axios.get(baseURL + "/stripe-key?keyType="+keyType);
    // const {publishable_key} = await axios.get(baseURL + "//stripe-key?keyType=" + keyType);
    // if(publishable_key){      
    //   console.log("res:   "+(publishable_key));
    //   const { publishableKey } = JSON.stringify(publishable_key);
    //   return publishableKey;
    // }

    // const response = await fetch(DB_HOST +"/" + DB_PORT + "/stripe-key?keyType=" + keyType);
    // console.log("response:   " + response);
    // const { publishableKey } = await response.json();
    // return publishableKey;
    
  } catch (e) {
    console.warn("Unable to fetch publishable key. Is your server running?");
    Alert.alert(
      "Error",
      "Unable to fetch publishable key. Is your server running?"
    );
    return null;
  }
}