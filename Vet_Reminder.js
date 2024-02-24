import React, { useState } from "react";
import {View,Text,StyleSheet, TouchableOpacity, Image} from 'react-native';
import DatePicker from "react-native-date-picker";
import DateTimePicker from '@react-native-community/datetimepicker';

const VetReminder = ()=>{
    const handlePress = () => {
        console.log("Button pressed");
    }
    const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.nav_bar}>
        <TouchableOpacity>
          <Image
            source={require("../PetMate/AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <View style={styles.nav_text_container}>
          <Text style={styles.nav_text}>REMINDERS</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../PetMate/AppPics/Setting.png")}
            style={styles.settings}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container5}>
        <View style={styles.container1}>
          <Text style={styles.text1}>TODAY</Text>
        </View>

        <View style={styles.container2}>
          <View style={styles.date_container}>
            <DatePicker
              style={styles.datePickerStyle}
              date={date}
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              minDate="01-01-1900"
              maxDate="01-01-2100"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  right: -5,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderColor: "black",
                  alignItems: "flex-start",
                  borderWidth: 1,
                  borderBottomWidth: 1,
                },
                placeholderText: {
                  fontSize: 15,
                  color: "black",
                },
                dateText: {
                  fontSize: 15,
                },
              }}
              onDateChange={(date) => {
                setDate(date);
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.dates}>
      <RNDateTimePicker dayOfWeekFormat={'{dayofweek.abbreviated(2)}'} />
        {/* <View style={styles.container3}>
          <TouchableOpacity style={styles.date_button} onPress={handlePress}>
            <Text style={styles.dateButtonText}>THU</Text>
            <Text style={styles.dateButtonText}> 22</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container3}>
          <TouchableOpacity style={styles.date_button} onPress={handlePress}>
            <Text style={styles.dateButtonText}>FRI</Text>
            <Text style={styles.dateButtonText}> 23</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container3}>
          <TouchableOpacity style={styles.date_button} onPress={handlePress}>
            <Text style={styles.dateButtonText}>SAT</Text>
            <Text style={styles.dateButtonText}> 24</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container3}>
          <TouchableOpacity style={styles.date_button} onPress={handlePress}>
            <Text style={styles.dateButtonText}>SUN</Text>
            <Text style={styles.dateButtonText}> 25</Text>
          </TouchableOpacity>
        </View> */}
      </View>

      <View style={styles.reminder_container}>
        <Text style={styles.reminder_text}>UPCOMING</Text>
        <View style={styles.main_content}>
          <View style={styles.view1}>
            <Text style={styles.reminder_time}>12 pm</Text>
          </View>

          <View style={styles.view2}>
            <Text style={styles.text2}>Anne's appointment </Text>
          </View>
        </View>
      </View>
      <View style={styles.main_content}>
        <View style={styles.view3}>
          <Text style={styles.reminder_time}>4 pm</Text>
        </View>

        <View style={styles.view4}>
          <Text style={styles.text2}>John's appointment</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => handlePress("Home")}>
          <Image
            source={require("../PetMate/AppPics/Footer_Menu.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Chat")}>
          <Image
            source={require("../PetMate/AppPics/Footer_Chat.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Medical records")}>
          <Image
            source={require("../PetMate/AppPics/Footer_appointment.png")}
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
    justifyContent: "flex-start",
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
    marginBottom: 20,
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
  container5: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 12
  },
  dates: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  container1: {
    alignItems: "center",
    marginTop: 20,
    marginLeft: -30,   
  },
  text1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  container2: {
    marginTop: 20,
    marginLeft: 40,
    justifyContent: "space-around",
    alignItems: "center",
  },
  container3: {
    margin: 10,
  },
  date_button: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  dateButtonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  datePickerStyle: {
    height: 30,
    width: 220,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
  },
  date_container: {
    justifyContent: "center",
    alignItems: "center",
  },
  reminder_container: {
    backgroundColor: "#E6B4EB",
    position: "absolute",
    top: 300,
    width: 360,
    height: 460,
    borderRadius: 20,
  },

  reminder_text: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  main_content: {
    flexDirection: "row",
  },
  view1: {
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    marginLeft: 15,
  },
  reminder_time: {
    color: "black",
    fontSize: 16,
  },
  view2: {
    backgroundColor: "white",
    width: "60%",
    height: "40%",
    borderRadius: 20,
    marginTop: 35,
    marginLeft: 70,
    justifyContent: "center",
  },

  text2: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10
  },
  view3: {
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    marginLeft: 15,
    marginTop: 200,
  },
  view4: {
    backgroundColor: "white",
    width: 220,
    height: 50,
    borderRadius: 20,
    marginTop: 200,
    marginLeft: 70,
    justifyContent: "center",
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
export default VetReminder;
