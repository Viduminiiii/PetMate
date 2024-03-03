import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from "react-native";

const Payment_1 = ({ navigation }) => {
    const handlePress = () => {
        console.log("Button pressed");
      };
    return (
        <View style={styles.page}>
            <View style = {styles.nav_bar}>
                    <Text style = {styles.nav_text}>
                        PAYMENT SUMMARY
                    </Text>
            </View>
            <View style={styles.container1}>
                    <Text style = {styles.topic}>
                        Payment Details
                    </Text>
            </View>
            <View style={styles.detailContainer}>
                <View style={styles.eachDetail}>
                    <Text style={styles.name}>Doctor Fee</Text>
                    <TextInput style={styles.Text_box}></TextInput>
                </View>
                <View style={styles.eachDetail}>
                    <Text style={styles.name}>eChannelling Fee</Text>
                    <TextInput style={styles.Channel_Text_box}></TextInput>
                </View>
                <View style={styles.eachDetail}>
                    <Text style={styles.name}>Discount</Text>
                    <TextInput style={styles.Text_box}></TextInput>
                </View>
                <View style={styles.eachDetail}>
                    <Text style={styles.name}>Total Fee</Text>
                    <TextInput style={styles.Text_box}></TextInput>
                </View>
            </View>
            
            <View style={styles.container2}>
            <TouchableOpacity onPress={() => handlePress("Send")}>
                    <View style={styles.button}>
                        <Text style={styles.proceed_btn}>Proceed</Text>
                    </View>
            </TouchableOpacity>
            </View>
            
            <View style = {styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image
                        source={require("../../AppPics/Footer_Menu.png")}
                        style={styles.menu_img}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Image
                        source={require("../../AppPics/Footer_Chat.png")}
                        style={styles.menu_img}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress("Vet Clinic")}>
                    <Image
                        source={require("../../AppPics/Footer_VetClinic.png")}
                        style={styles.menu_img}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('DocChannelling')}>
                    <Image
                        source={require("../../AppPics/Footer_appointment.png")}
                        style={styles.menu_img}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Medicalrecords')}>
                    <Image
                        source={require("../../AppPics/Footer_medicalRecords.png")}
                        style={styles.menu_img}
                    />
                </TouchableOpacity>
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
        backgroundColor:'#CEEFA3',
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
      container2: {
        //flex: 1,
        //alignItems: "flex-start", 
        marginRight: "0%", 
        marginBottom: "30%",
      },
    detailContainer: {
        //flexDirection: "row",
        backgroundColor: "#E6B4EB",
        position: "absolute",
        top: 170, 
        //left: 20,
        width: 365,
        height: 300,
        borderRadius: 20,
    },
    footer: {
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
        height: 65,
        justifyContent: "center",
        alignItems: "center",
      },
      menu_img: {
        width: 40,
        height: 40,
        margin: 15,
      },
      container: {
        flex: 1,
        alignItems: "flex-start", 
        marginRight: 150, 
      },
      Text_box: {
        backgroundColor: "white",
        width: "60%",
        height: "50%",
        marginTop: 23,
        borderRadius: 10,
      },
      Channel_Text_box: {
        backgroundColor: "white",
        width: "50%",
        height: "50%",
        marginTop: 23,
        borderRadius: 10,
      },
      name: {
        fontSize: 18,
        padding: 10,
        alignSelf: "flex-start",
        fontWeight: "bold",
        marginTop: 25,
      },
      eachDetail: {
        flexDirection: "row",
        alignItems: 'center',
      },
      button: {
        height: 43,
        width: 120,
        backgroundColor: "#F2E5E5",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        // alignSelf: "center",
        //marginTop: -5,
      },
      proceed_btn: {
        fontWeight: "bold",
        fontSize: 27,
      }
})
export default Payment_1;