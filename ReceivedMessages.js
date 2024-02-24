import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const ReceivedMessages = () => {
    const handlePress = () => {
        console.log("Button pressed");
    }
    return(
        <View style={styles.container}>
            <View style={styles.nav_bar}>
                <TouchableOpacity onPress={() => handlePress("Home")}>
                    <Image
                        source={require("../PetMate/AppPics/Logo.png")}
                        style={styles.logo_img} 
                    />
                </TouchableOpacity>
                <Text style={styles.nav_text}>CHAT</Text>
                <TouchableOpacity onPress={() => handlePress("Settings")}>
                    <Image
                        source={require("../PetMate/AppPics/Setting.png")}
                        style={styles.settings_img} 
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.inside_container}>
                <View style={styles.user_and_message_buttons}>
                    <TouchableOpacity onPress={() => handlePress("User")}>
                        <Image
                            source={require("../PetMate/AppPics/User_icon.png")}
                            style={styles.user_icon_img} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress("Message")} style={styles.message_button}>
                        <Text style={styles.message_button_text}>Hi Doctor, My Dog...</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.user_and_message_buttons}>
                    <TouchableOpacity onPress={() => handlePress("User")}>
                        <Image
                            source={require("../PetMate/AppPics/User_icon.png")}
                            style={styles.user_icon_img} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress("Message")} style={styles.message_button}>
                        <Text style={styles.message_button_text}>Hi Doctor, My Dog...</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.user_and_message_buttons}>
                    <TouchableOpacity onPress={() => handlePress("User")}>
                        <Image
                            source={require("../PetMate/AppPics/User_icon.png")}
                            style={styles.user_icon_img} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress("Message")} style={styles.message_button}>
                        <Text style={styles.message_button_text}>Hi Doctor, My Dog...</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.user_and_message_buttons}>
                    <TouchableOpacity onPress={() => handlePress("User")}>
                        <Image
                            source={require("../PetMate/AppPics/User_icon.png")}
                            style={styles.user_icon_img} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress("Message")} style={styles.message_button}>
                        <Text style={styles.message_button_text}>Hi Doctor, My Dog...</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.user_and_message_buttons}>
                    <TouchableOpacity onPress={() => handlePress("User")}>
                        <Image
                            source={require("../PetMate/AppPics/User_icon.png")}
                            style={styles.user_icon_img} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress("Message")} style={styles.message_button}>
                        <Text style={styles.message_button_text}>Hi Doctor, My Dog...</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.user_and_message_buttons}>
                    <TouchableOpacity onPress={() => handlePress("User")}>
                        <Image
                            source={require("../PetMate/AppPics/User_icon.png")}
                            style={styles.user_icon_img} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress("Message")} style={styles.message_button}>
                        <Text style={styles.message_button_text}>Hi Doctor, My Dog...</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => handlePress("Menu")}>
                    <Image
                        source={require("../PetMate/AppPics/Footer_Menu.png")}
                        style={styles.footer_menu_img} 
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress("Chat")}>
                    <Image
                        source={require("../PetMate/AppPics/Footer_Chat.png")}
                        style={styles.footer_menu_img} 
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress("Appointment")}>
                    <Image
                        source={require("../PetMate/AppPics/Footer_appointment.png")}
                        style={styles.footer_appointment_img} 
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#BAFAD0",
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
        marginRight: 80,
    },
    settings_img:{
        width: 60,
        height: 60,
        marginLeft: 80,
    },
    nav_text:{
        fontSize: 30,
        fontWeight: "bold",
    },
    inside_container:{
        backgroundColor: "pink",
        marginTop: 20,
        width: 400,
        height: 600,
        borderRadius: 40,
    },
    user_icon_img:{
        width: 60,
        height: 60,
    },
    user_and_message_buttons:{
        flexDirection: "row",
        margin: 20,
        alignItems: "center",
    },
    message_button:{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: 220,
        height: 45,
        borderRadius: 40,
        borderWidth: 5,
        marginLeft: 50,
    },
    message_button_text:{
        fontSize: 17,
        fontWeight: "bold",
    },
    footer:{
        flexDirection: "row",
        backgroundColor: "white",
        width: 400,
        height: 65,
        justifyContent: "center", // Used to add a space between items of the container in horizontal.
        alignItems: "center", // Aligns the content of the container vertically to the center.
    },
    footer_menu_img:{
        width: 40,
        height: 40,
        marginRight: 50,
    },
    footer_chat_img:{
        width: 40,
        height: 40,
    },
    footer_appointment_img:{
        width: 40,
        height: 40,
    },
})

export default ReceivedMessages;