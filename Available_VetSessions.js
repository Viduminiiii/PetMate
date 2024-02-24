import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Available_VetSessions = ({ navigation }) => {
  const handlePress = () => {
    console.log("Button pressed");
  };
  return (
    <View style={styles.container}>
      <View style={styles.nav_bar}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image
            source={require("../PetMate/AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <View style={styles.nav_text_container}>
          <Text style={styles.nav_text}>AVAILABLE</Text>
          <Text style={styles.nav_text}>SESSIONS</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Petowner_Settings')}>
          <Image
            source={require("../PetMate/AppPics/Setting.png")}
            style={styles.settings}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.abc_container1}>
        <View style={styles.abc_clinic}>
          <View style={styles.pic1}>
            <Image
              source={require("../PetMate/AppPics/ABC_vet clinic.png")}
              style={[styles.clinic1, , { marginBottom: 24 }]}
            />
          </View>

          <View style={styles.content2}>
            <Text style={styles.text1}>ABC Vet Clinic</Text>
            <Text style={styles.text1_1}>Colombo</Text>
            <Text style={styles.text1_1}>7.00 P.M (Evening)</Text>
            <View style={styles.container2}>
              <TouchableOpacity
                style={styles.book_button}
                onPress={() => navigation.navigate('Payment_1')}
              >
                <Text style={styles.bookButtonText}>BOOK NOW</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.def_container3}>
        <View style={styles.def_clinic}>
          <View style={styles.pic2}>
            <Image
              source={require("../PetMate/AppPics/DEF_vetClinic.png")}
              style={[styles.clinic2, , { marginBottom: 24 }]}
            />
          </View>

          <View style={styles.content3}>
            <Text style={styles.text2}>DEF Vet Clinic</Text>
            <Text style={styles.text2_1}>Gampaha</Text>
            <Text style={styles.text2_1}>10.00 A.M (Morning)</Text>
            <View style={styles.container4}>
              <TouchableOpacity
                style={styles.book_button}
                onPress={() => navigation.navigate('Payment_1')}
              >
                <Text style={styles.bookButtonText}>BOOK NOW</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.ghi_container4}>
        <View style={styles.ghi_clinic}>
          <View style={styles.pic3}>
            <Image
              source={require("../PetMate/AppPics/GHI_VetClinic.png")}
              style={[styles.clinic3, { marginBottom: 24 }]}
            />
          </View>

          <View style={styles.content4}>
            <Text style={styles.text3}>GHI Vet Clinic</Text>
            <Text style={styles.text3_1}>Colombo</Text>
            <Text style={styles.text3_1}>8.00 p.M (Evening)</Text>
            <View style={styles.container5}>
              <TouchableOpacity
                style={styles.book_button}
                onPress={() => navigation.navigate('Payment_1')}
              >
                <Text style={styles.bookButtonText}>BOOK NOW</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.jkl_container4}>
        <View style={styles.jkl_clinic}>
          <View style={styles.pic4}>
            <Image
              source={require("../PetMate/AppPics/JKL_VetClinic.png")}
              style={[styles.clinic4, { marginBottom: 24 }]}
            />
          </View>

          <View style={styles.content5}>
            <Text style={styles.text4}>JKL Vet Clinic</Text>
            <Text style={styles.text4_1}>Negambo</Text>
            <Text style={styles.text4_1}>8.00 p.M (Evening)</Text>
            <View style={styles.container6}>
              <TouchableOpacity
                style={styles.book_button}
                onPress={() => navigation.navigate('Payment_1')}
              >
                <Text style={styles.bookButtonText}>BOOK NOW</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image
            source={require("../PetMate/AppPics/Footer_Menu.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Image
            source={require("../PetMate/AppPics/Footer_Chat.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LocateVetClinics")}>
          <Image
            source={require("../PetMate/AppPics/Footer_VetClinic.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DocChannelling')}>
          <Image
            source={require("../PetMate/AppPics/Footer_appointment.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Medicalrecords')}>
          <Image
            source={require("../PetMate/AppPics/Footer_medicalRecords.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BAFAD0",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  nav_bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  logo: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    borderRadius: 90,
    marginRight: 10,
  },
  nav_text_container: {
    flexDirection: "column",
    alignItems: "center",
  },
  settings: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    borderRadius: 90,
    marginLeft: 10,
  },
  nav_text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  abc_container1: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  abc_clinic: {
    flexDirection: "row",
    height: "44%",
    width: "110%",
  },
  pic1: {
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
  clinic2: {
    width: "100%",
    height: "85%",
  },
  content2: {
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: "85%",
    backgroundColor: "#E6B4EB",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  text1: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  text1_1: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
  },
  book_button: {
    backgroundColor: "#7986CB",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  bookButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  def_container3: {
    marginTop: -200,
    paddingHorizontal: 20,
  },
  def_clinic: {
    flexDirection: "row",
    height: "40%",
    width: "110%",
  },
  pic2: {
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
  clinic1: {
    width: "100%",
    height: "85%",
  },
  content3: {
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: "85%",
    backgroundColor: "#E6B4EB",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  text2: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  text2_1: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  container4: {
    justifyContent: "center",
    alignItems: "center",
  },

  ghi_container4: {
    marginTop: -250,
    paddingHorizontal: 20,
  },
  ghi_clinic: {
    flexDirection: "row",
    height: "40%",
    width: "110%",
  },
  pic3: {
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
  clinic3: {
    width: "100%",
    height: "85%",
  },
  content4: {
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: "85%",
    backgroundColor: "#E6B4EB",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  text3: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  text3_1: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  container5: {
    justifyContent: "center",
    alignItems: "center",
  },

  jkl_container4: {
    marginTop: -260,
    paddingHorizontal: 20,
  },
  jkl_clinic: {
    flexDirection: "row",
    height: "40%",
    width: "110%",
  },
  pic4: {
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
  clinic4: {
    width: "100%",
    height: "85%",
  },
  content5: {
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: "85%",
    backgroundColor: "#E6B4EB",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  text4: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  text4_1: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  container6: {
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: "white",
    height: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  menu_img: {
    width: 40,
    height: 40,
    margin: 15,
  },
});
export default Available_VetSessions;
