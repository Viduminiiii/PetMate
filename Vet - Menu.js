import React from "react";
import { View,Text,Image,StyleSheet, TouchableOpacity} from "react-native";

const PetOwnerMenu = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View style = {styles.nav_bar}>
                <TouchableOpacity onPress={() => navigation.navigate('VetMenu')}>
                    <Image source={require ('../PetMate/AppPics/Logo.png')} style = {styles.logo}/>
                </TouchableOpacity>
                <Text style = {styles.nav_text}>
                    MENU
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Vet_Settings')}>
                    <Image source={require ('../PetMate/AppPics/Setting.png')} style = {styles.settings}/>
                </TouchableOpacity>
            </View>

            <View style ={styles.menu_button1}>
               <TouchableOpacity onPress={() => navigation.navigate('VetChat')} style={styles.button}>
                  <View style={styles.chat}>
                     <View style={[styles.halfView1, { backgroundColor: '#6B68F7' }, { borderTopLeftRadius: 15 }, { borderBottomLeftRadius: 15 }]}>
                           <Image source={require('../PetMate/AppPics/Menu_ChatDoc.png')} style={styles.chatDoc_image} />
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
                           <Image source={require('../PetMate/AppPics/Digital_Prescription.png')} style={styles.prescription_image} />
                     </View>
                     <View style={[styles.halfView2, { backgroundColor: '#3300FF' }, { borderTopRightRadius: 15 }, { borderBottomRightRadius: 15 }]}>
                           <Text style={styles.text1}>Digital prescription</Text>
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
        backgroundColor:'#BAFAD0',
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
        height: '40%', 
        width: '90%', 
    },
    menu_button2: {
        marginTop:-500,
        height: '80%'
    },
    vet:{
        flexDirection: 'row', // Use 'column' for vertical split
        height: '38%', 
        width: '90%', 
        marginTop: 40,
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
    }
  });
  
  export default PetOwnerMenu;