import React from "react";
import { View,Text,Image,StyleSheet, TouchableOpacity} from "react-native";

const UserCategory = ({ navigation }) => {
    const handlePress = () => {
        console.log("Button pressed");
      };
    return (
        <View style={styles.page}>
            <Image
                source={require('../PetMate/AppPics/Dog.png')}
                style={styles.image}
            />
            <Text style={styles.text}>Select the user category: </Text>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.button}>
                <View style={styles.petowner}>
                    <View style={[styles.halfView1, { backgroundColor: '#6B68F7' }, { borderTopLeftRadius: 15 }, { borderBottomLeftRadius: 15 }]}>
                        <Image source={require('../PetMate/AppPics/UC_PetOwner.png')} style={styles.owner_image} />
                    </View>
                    <View style={[styles.halfView2, { backgroundColor: '#3300FF' }, { borderTopRightRadius: 15 }, { borderBottomRightRadius: 15 }]}>
                        <Text style={styles.text1}>Pet Owner</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('VetSignUp')} style={styles.button}>
                <View style={styles.vet}>
                    <View style={[styles.halfView1, { backgroundColor: '#6B68F7' }, { borderTopLeftRadius: 15 }, { borderBottomLeftRadius: 15 }]}>
                        <Image source={require('../PetMate/AppPics/Menu_VetClinic.png')} style={styles.owner_image} />
                    </View>
                    <View style={[styles.halfView2, { backgroundColor: '#3300FF' }, { borderTopRightRadius: 15 }, { borderBottomRightRadius: 15 }]}>
                        <Text style={styles.text1}>Vetenarian</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('PharmacySignUp')} style={styles.button}>
                <View style={styles.pharmacy}>
                    <View style={[styles.halfView1, { backgroundColor: '#6B68F7' }, { borderTopLeftRadius: 15 }, { borderBottomLeftRadius: 15 }]}>
                        <Image source={require('../PetMate/AppPics/UC_Pharmacy.png')} style={styles.phar_image} />
                    </View>
                    <View style={[styles.halfView2, { backgroundColor: '#3300FF' }, { borderTopRightRadius: 15 }, { borderBottomRightRadius: 15 }]}>
                        <Text style={styles.text1}>Pharmacy</Text>
                    </View>
                </View>
            </TouchableOpacity>
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
    image: {
        resizeMode: 'contain',
        width: '70%',
        height: '30%',
        alignSelf: 'center', // Center the image horizontally
    },
    text: {
        fontSize: 20,
        color:'black',
        alignSelf:'flex-start', //text align left
        paddingLeft:30,
        paddingBottom: 115,
    },
    petowner: {
        flexDirection: 'row', // Use 'column' for vertical split
        height: '35%', 
        width: '90%', 
    },
    vet:{
        flexDirection: 'row', // Use 'column' for vertical split
        height: '35%', 
        width: '90%', 
    },
    pharmacy: {
        flexDirection: 'row', // Use 'column' for vertical split
        height: '35%', 
        width: '90%', 
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
    owner_image:{
        width: '90%', 
        height: '90%',
    },
    phar_image:{
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
        marginVertical: -100,
    }
  });
  
  export default UserCategory;