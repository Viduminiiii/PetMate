import React from "react";
import { View,Text,Image,StyleSheet, TouchableOpacity} from "react-native";

const PetOwnerMenu = ({ navigation }) => {
    const handlePress = () => {
        console.log("Button pressed");
      };
    return (
        <View style={styles.page}>
            <View style = {styles.nav_bar}>
                <TouchableOpacity onPress={() => navigation.navigate('VetMenu')}>
                    <Image source={require ('../../AppPics/Logo.png')} style = {styles.logo}/>
                </TouchableOpacity>
                <Text style = {styles.nav_text}>
                    MENU
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('VetReminder')}>
                    <Image source={require ('../../AppPics/Reminder.png')} style = {styles.settings}/>
                </TouchableOpacity>
            </View>

            <View style ={styles.menu_button1}>
                <TouchableOpacity onPress={() => navigation.navigate('ReceivedMessages')} style={styles.button}>
                  <View style={styles.chat}>
                     <View style={[styles.halfView1, { backgroundColor: '#6B68F7' }, { borderTopLeftRadius: 15 }, { borderBottomLeftRadius: 15 }]}>
                           <Image source={require('../../AppPics/Menu_ChatDoc.png')} style={styles.chatDoc_image} />
                     </View>
                     <View style={[styles.halfView2, { backgroundColor: '#3300FF' }, { borderTopRightRadius: 15 }, { borderBottomRightRadius: 15 }]}>
                           <Text style={styles.text1}>Chat</Text>
                     </View>
                  </View>
               </TouchableOpacity>
            </View> 

            <View style={styles.menu_button2}>
            <TouchableOpacity onPress={() => navigation.navigate('VetPrescription')} style={styles.button}>
                  <View style={styles.vet}>
                     <View style={[styles.halfView1, { backgroundColor: '#6B68F7' }, { borderTopLeftRadius: 15 }, { borderBottomLeftRadius: 15 }]}>
                           <Image source={require('../../AppPics/Digital_Prescription.png')} style={styles.prescription_image} />
                     </View>
                     <View style={[styles.halfView2, { backgroundColor: '#3300FF' }, { borderTopRightRadius: 15 }, { borderBottomRightRadius: 15 }]}>
                           <Text style={styles.text1}>Digital prescription</Text>
                     </View>
                  </View>
               </TouchableOpacity>
            </View>

            <View style={styles.menu_button3}>
            <TouchableOpacity onPress={() => navigation.navigate('VetAvailability')} style={styles.button}>
                  <View style={styles.vet1}>
                     <View style={[styles.halfView1, { backgroundColor: '#6B68F7' }, { borderTopLeftRadius: 15 }, { borderBottomLeftRadius: 15 }]}>
                           <Image source={require('../../AppPics/VetMenu_Availability.png')} style={styles.prescription_image} />
                     </View>
                     <View style={[styles.halfView2, { backgroundColor: '#3300FF' }, { borderTopRightRadius: 15 }, { borderBottomRightRadius: 15 }]}>
                           <Text style={styles.text1}>Availability</Text>
                     </View>
                  </View>
               </TouchableOpacity>
            </View>

            <View style={styles.menu_button4}>
                <TouchableOpacity onPress={() => navigation.navigate('Available_VetSessions')} style={styles.button}>
                    <View style ={styles.vet2}>
                        <View style={[styles.halfView1, { backgroundColor: '#6B68F7' }, { borderTopLeftRadius: 15 }, { borderBottomLeftRadius: 15 }]}>
                           <Image source={require('../../AppPics/VetMenu_Appointments.png')} style={styles.appointments_image} />
                        </View>
                        <View style={[styles.halfView2, { backgroundColor: '#3300FF' }, { borderTopRightRadius: 15 }, { borderBottomRightRadius: 15 }]}>
                           <Text style={styles.text1}>Appointment </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>


        </View>
    );
  };
  
  const styles = StyleSheet.create({
    page:{
        flex:1, //fill the whole screen
        backgroundColor:'#CEEFA3',
        justifyContent: 'flex-start', //start from the top
        alignItems:'center',
    },
    nav_bar: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      paddingTop: 20,
  },
  logo: {
      resizeMode: 'contain',
      width: 60,
      height: 60,
      borderRadius: 90,
      marginRight:45,
  },
  nav_text: {
      fontSize: 35,
      fontWeight: 'bold',
  },
  settings: {
      resizeMode: 'contain',
      width: 60,
      height: 60,
      borderRadius: 90,
      marginLeft:45,
  },
  menu_button1:{
    //   paddingTop:150,
      height: '80%',
      marginTop:170
  },
    chat: {
        flexDirection: 'row', // Use 'column' for vertical split
        //height: '40%',
        height:'38%', 
        width: '90%', 
    },
    menu_button2: {
        marginTop:-500,
        height: '80%'
    },
    menu_button3: {
        marginTop:-455,
        height: '80%'
    },
    menu_button4: {
        marginTop:-455,
        height: '80%',
        

    },
    vet:{
        flexDirection: 'row', // Use 'column' for vertical split
        height: '38%', 
        width: '90%', 
        marginTop: 1,
    },
    vet1:{
        flexDirection: 'row', // Use 'column' for vertical split
        height: '40%',
        width: '90%', 
        marginTop: -40,
    },
    vet2:{
        flexDirection: 'row', // Use 'column' for vertical split
        height: '43%', 
        width: '90%', 
        marginTop: -80,
    },
    halfView1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '35%',
    },
    halfView2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
    },
    chatDoc_image:{
        resizeMode: 'contain',
      width: '70%', 
      height: '70%',
  },
    prescription_image:{
        resizeMode: 'contain',
        width: '70%', 
      height: '70%',
    },
    channelling_image:{
        width: '80%',
        height:'80%',
    },
    phar_image: {
      width: '80%',
      height:'80%',
    },
    text1: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    button: {
        alignItems: 'center',
        width: '90%',
        // height: '50%', 
        marginVertical: -100,
        
    },
    appointments_image: {
        // resizeMode: 'contain',
        width: '90%', 
      height: '90%',
    }
  });
  
  export default PetOwnerMenu;