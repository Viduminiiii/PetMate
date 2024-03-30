import React, { useEffect, useState } from "react";
import AvailableMedicine from "./Frontend/Pharmacy/AvailableMedicine";
import Available_VetSessions from "./Frontend/PetOwner/Available_VetSessions";
import Chat from "./Frontend/PetOwner/Chat";
import DocChannelling from "./Frontend/PetOwner/Doctor channelling";
import LocatePharmacy from "./Frontend/PetOwner/LocatePharmacy";
import LocateVetClinics from "./Frontend/PetOwner/LocateVetClinics";
import Login from "./Frontend/Login";
import Medicalrecords from "./Frontend/PetOwner/Medicalrecords";
import Payment_1 from "./Frontend/PetOwner/Payment_1";
import PetOwnerMenu from "./Frontend/PetOwner/petowner_menu";
import Petowner_Settings from "./Frontend/PetOwner/Petowner_Settings";
import Petowner_NotificationPage from "./Frontend/PetOwner/Petowner_NotificationPage";
import Pharmacy_Settings from "./Frontend/Pharmacy/Pharmacy_Settings";
import PharmacySignUp from "./Frontend/Pharmacy/PharmacySignup";
import PharmacyPrescription from "./Frontend/Pharmacy/PharmacyPrescription";
import Prescription from "./Frontend/PetOwner/Digital prescription";
import ReceivedMessages from "./Frontend/Vetenarian/ReceivedMessages";
import Reminders from "./Frontend/PetOwner/Reminders";
import SignUp from "./Frontend/PetOwner/Sign up";
import Startup from "./Frontend/Startup";
import UserCategory from "./Frontend/User Category";
import UserSearch from "./Frontend/Vetenarian/User search";
import VetAvailability from "./Frontend/Vetenarian/VetAvailability";
import VetChat from "./Frontend/Vetenarian/Vet Chat";
import VetMenu from "./Frontend/Vetenarian/Vet - Menu";
import VetPrescription from "./Frontend/Vetenarian/Vet - Digital prescription";
import VetReminder from "./Frontend/Vetenarian/Vet_Reminder";
import VetSignUp from "./Frontend/Vetenarian/Vet Sign up";
import Vet_Settings from "./Frontend/Vetenarian/Vet_Settings";
import Vet_Notification from "./Frontend/Vetenarian/Vet_Notification";
import GoogleMap from "./Frontend/GoogleMap";
import FPSendEmail from "./Frontend/FPSendEmail";
import FPVerification from "./Frontend/FPVerification";
import PaymentScreen from "./Frontend/PetOwner/PaymentScreen";
import ChatScreen from "./Frontend/ChatScreen";
import History from "./Frontend/PetOwner/AppointmentHistory";
import ChatMessages from "./Frontend/components/ChatMessage";

import FPResetPassword from "./Frontend/FPResetPassword";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./Frontend/config/AuthContext";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
      <NavigationContainer initialRouteName="Startup">
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="UserCategory" component={UserCategory} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="ChatMessages" component={ChatMessages} />

          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Menu" component={PetOwnerMenu} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="DocChannelling" component={DocChannelling} />
          <Stack.Screen
            name="Petowner_Settings"
            component={Petowner_Settings}
          />
          <Stack.Screen name="Medicalrecords" component={Medicalrecords} />
          <Stack.Screen
            name="Available_VetSessions"
            component={Available_VetSessions}
          />
          <Stack.Screen name="Payment_1" component={Payment_1} />
          <Stack.Screen
            name="Petowner_NotificationPage"
            component={Petowner_NotificationPage}
          />
          <Stack.Screen name="Prescription" component={Prescription} />
          <Stack.Screen name="Reminders" component={Reminders} />
          <Stack.Screen name="LocateVetClinics" component={LocateVetClinics} />
          <Stack.Screen name="LocatePharmacy" component={LocatePharmacy} />
          <Stack.Screen name="History" component={History} />

          <Stack.Screen name="VetSignUp" component={VetSignUp} />
          <Stack.Screen name="VetMenu" component={VetMenu} />
          <Stack.Screen name="VetChat" component={VetChat} />
          <Stack.Screen name="VetPrescription" component={VetPrescription} />
          <Stack.Screen name="Vet_Settings" component={Vet_Settings} />
          <Stack.Screen name="UserSearch" component={UserSearch} />
          <Stack.Screen name="Vet_Notification" component={Vet_Notification} />
          <Stack.Screen name="VetReminder" component={VetReminder} />
          <Stack.Screen name="ReceivedMessages" component={ReceivedMessages} />
          <Stack.Screen name="VetAvailability" component={VetAvailability} />

          <Stack.Screen name="PharmacySignUp" component={PharmacySignUp} />
          <Stack.Screen
            name="PharmacyPrescription"
            component={PharmacyPrescription}
          />
          <Stack.Screen
            name="Pharmacy_Settings"
            component={Pharmacy_Settings}
          />
          <Stack.Screen
            name="AvailableMedicine"
            component={AvailableMedicine}
          />
          <Stack.Screen name="GoogleMap" component={GoogleMap} />
          <Stack.Screen name="FPSendEmail" component={FPSendEmail} />
          <Stack.Screen name="FPVerification" component={FPVerification} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
export default App;