import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const AvailableMedicine = ({ navigation }) => {
    const handlePress = () => {
        console.log("Button pressed");
    }
    return(
        <View style={styles.container}>
            <View style={styles.nav_bar}>
                <TouchableOpacity onPress={() => navigation.navigate('PharmacyPrescription')}>
                    <Image
                        source={require("../PetMate/AppPics/Logo.png")}
                        style={styles.logo_img} 
                    />
                </TouchableOpacity>
                <View>
                    <Text style={[styles.nav_text, {paddingLeft: 22}]}>MEDICINE</Text>
                    <Text style={styles.nav_text}>AVAILABILITY</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Pharmacy_Settings')}>
                    <Image
                        source={require("../PetMate/AppPics/Setting.png")}
                        style={styles.settings_img} 
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.inside_container_1}>
                <Text style={styles.container_1_text}>Digital Prescription</Text>
                {/* <Image
                    source={require("../PetMate/AppPics/User_icon.png")}
                    style={styles.digital_prescription} 
                /> */}
            </View>
            <View style={styles.inside_container_2}>
                <Text style={styles.container_2_text}>Available Medicine</Text>
                <TextInput style={styles.text_input_box}>Type here...</TextInput>
                <TouchableOpacity onPress={() => handlePress("Send")} style={styles.send_button}>
                    <View style={styles.send_button_container}>
                        <Text style={styles.send_text}>Send</Text>
                        <Image
                            source={require("../PetMate/AppPics/Chat_Send.png")}
                            style={styles.send_img} 
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('PharmacyPrescription')}>
                    <Image
                        source={require("../PetMate/AppPics/PharFooter_Prescription.png")}
                        style={styles.footer_prescription_img} 
                    />
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => handlePress("Menu")}>
                    <Image
                        source={require("../PetMate/AppPics/Footer_Menu.png")}
                        style={styles.footer_menu_img} 
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress("Medicine")}>
                    <Image
                        source={require("../PetMate/AppPics/PharFooter_Medicine.png")}
                        style={styles.footer_medicine_img} 
                    />
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#BAFAD0",
        justifyContent: "space-between",
        alignItems: "center"
    },
    nav_bar:{
        flexDirection: "row", // This style is used to arrange the items of the container horizontally, from left to right.
        paddingTop: 20,
        alignItems: "center",
    },
    logo_img:{
        width: 60,
        height: 60,
        borderRadius: 90,
        marginRight: 30,
    },
    settings_img:{
        width: 60,
        height: 60,
        marginLeft: 30,
    },
    nav_text:{
        fontSize: 30,
        fontWeight: "bold",
    },
    inside_container_1:{
        alignItems: "center",
        backgroundColor: "#E6B4EB",
        marginTop: 20,
        width: 380,
        height: 180,
        borderRadius: 30,
    },
    container_1_text:{
        margin: 20,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: 'flex-start'
    },
    // digital_prescription:{
    //     width: 150,
    //     height: 150,
    // },
    inside_container_2:{
        alignItems: "center",
        backgroundColor: "#E6B4EB",
        marginTop: 20,
        width: 380,
        height: 290,
        borderRadius: 30,
    },
    container_2_text:{
        margin: 20,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: 'flex-start'
    },
    text_input_box:{
        backgroundColor: "white",
        width: 350,
        height: 150,
        borderRadius: 15,
    },
    send_button:{
        backgroundColor: "white",
        margin: 20,
        width: 150,
        height: 44,
        borderRadius: 30,
        borderWidth: 2,
        justifyContent:'center',
        alignItems: 'center'
    },
    send_button_container:{
        flexDirection: "row",
    },
    send_text:{
        marginTop: 5,
        marginLeft: 10,
        fontSize: 17,
        fontWeight: "bold",
    },
    send_img:{
        marginLeft: 40,
        width: 32,
        height: 35,
    },
    footer:{
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
        height: 65,
        justifyContent: "center", // Used to add a space between items of the container in horizontal.
        alignItems: "center", // Aligns the content of the container vertically to the center.
    },
    footer_prescription_img:{
        width: 50,
        height: 50,
        // marginRight: 50,
    },
})

export default AvailableMedicine;