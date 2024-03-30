import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";
  import React, { useLayoutEffect, useContext, useEffect, useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { Ionicons } from "@expo/vector-icons";
  import { MaterialIcons } from "@expo/vector-icons";
  import { jwtDecode } from "jwt-decode";
  import axios from "axios";
  import { useAuth } from "./config/AuthContext";
  const config = require("./config/config");
  
  const ChatScreen = () => {
    const baseURL = config.DB_HOST + ":" + config.DB_PORT;
    // console.log("baseURL: " + baseURL);
  
    const navigation = useNavigation();
    const { login, user, userID, userType } = useAuth();
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        const userObject = JSON.parse(user);
        const token = userObject.token;
        axios
          .get(baseURL + `/users/${userID}/${userType}`)
          .then((res) => {
            setUsers(res.data);
          })
          .catch((e) => console.log(e));
      };
  
      fetchUsers();
    }, []);
  
    return (
      <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 10,
            textDecorationLine: "underline",
          }}
        >
          Chat Room
        </Text>
        <View style={{ padding: 10 }}>
          {users &&
            users.map((item) => (
              <TouchableOpacity
                key={item._id}
                onPress={() =>
                  {
                    navigation.navigate("ChatMessages", { recepientId: item._id });
                    // alert("---- recepientId  " + item._id);
                }
                }
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                  borderRadius: 20,
                  borderColor: "rgba(128, 128, 128, 0.2)", // Gray color with 20% opacity
                  borderWidth: 3, // Optional: Set border width
                }}
              >
                <View>
                  <Image
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 50,
                      margin: 3,
                      resizeMode: "cover",
                      borderColor: "rgba(128, 128, 128, 0.3)", // Gray color with 30% opacity
                      borderWidth: 3, // Optional: Set border width
                    }}
                    source={require("../AppPics/Dog.png")}
                  />
                </View>
                <View style={{ marginLeft: 20, flex: 1 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {item?.Veternarian
                      ? item?.Veternarian.fullname
                      : item?.petOwner.fullname}
                  </Text>
                  <Text style={{ fontSize: 14 }}>
                    {item?.Veternarian
                      ? item?.Veternarian.veterinaryClinicName
                      : item?.petOwner.petname}
                  </Text>
                  <Text style={{ marginTop: 2, color: "gray" }}>
                    {item?.Veternarian
                      ? item?.Veternarian.email
                      : item?.petOwner.email}
                  </Text>
                </View>
                <MaterialIcons name="navigate-next" size={50} color="black" />
              </TouchableOpacity>
            ))}
        </View>
      </View>
    );
  };
  
  export default ChatScreen;
  
  const styles = StyleSheet.create({
    icon1: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    text1: { fontSize: 16, fontWeight: "bold" },
  });