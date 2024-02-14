import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

const Payment_1 = () => {
    return (
        <View style={styles.page}>
            <View style = {styles.nav_bar}>
                    <Text style = {styles.nav_text}>
                        PAYMENT METHOD
                    </Text>
            </View>
            <View style={styles.container1}>
                    <Text style = {styles.topic}>
                        Payment Details
                    </Text>
            </View>
            <View style={styles.detailContainer}>

            </View>        
        </View>

    )
}

const styles = StyleSheet.create ({
    nav_bar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 20,
    },
    nav_text: {
        fontSize: 35,
        fontWeight: 'bold',
        // alignSelf: 'center'
    },
    page:{
        flex:1, //fill the whole screen
        backgroundColor:'#BAFAD0',
        justifyContent: 'flex-start', //start from the top
        alignItems:'center',
    },
    topic:{
        textAlign: "left",
        fontSize: 20,
        paddingTop: 40,
    },
    container1: {
        flex: 1,
        alignItems: "flex-start", 
        marginRight: 210, 
      },
    detailContainer: {
        backgroundColor: "#E6B4EB",
        position: "absolute",
        top: 170, 
        //left: 20,
        width: 365,
        height: 350,
        borderRadius: 20,
    }
})
export default Payment_1;