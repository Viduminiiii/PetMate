import React from 'react';
import UserCategory from './User Category';
import DocChannelling from './Doctor channelling';
//import Prescription from './Digital prescription'
import VetPrescription from './Vet - Digital prescription'
import VetMenu from './Vet - Menu'
import PetOwnerMenu from './petowner_menu'
// import Payment_1 from './Payment_1';
// import Payment_2 from './payment_2';
import Login from './Login';
import SignUp from './Sign up'
import VetSignUp from './Vet Sign up'
import PharmacySignUp from './Pharmacy Sign up'
import Chat from './Pet Owner Chat'
import VetChat from './Vet Chat'
import UserSearch from './User search'
import Petowner_Settings from './Petowner_Settings';
//  import Pharmacy_Settings from './Pharmacy_Settings';
import Vet_Settings from './Vet_Settings';
// import Petowner_NotificationPage from './Petowner_NotificationPage';
import Vet_Notification from './Vet_Notification';
// import Available_VetSessions from './Available_VetSessions';
// import Reminders from './Reminders';
//import Payment_1 from './Payment_1';
import Medicalrecords from './Medicalrecords';
// import PharmacyPrescription from './PharmacyPrescription';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
   return (
      <NavigationContainer initialRouteName="UserCategory">
         <Stack.Navigator>
            <Stack.Screen name="UserCategory" component={UserCategory} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="VetSignUp" component={VetSignUp} />
            <Stack.Screen name="PharmacySignUp" component={PharmacySignUp} />
            <Stack.Screen name="Menu" component={PetOwnerMenu} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="DocChannelling" component={DocChannelling} />
            <Stack.Screen name="VetMenu" component={VetMenu} />
            <Stack.Screen name="VetChat" component={VetChat} />
            <Stack.Screen name="VetPrescription" component={VetPrescription} />
            <Stack.Screen name="Vet_Settings" component={Vet_Settings} />
            <Stack.Screen name="UserSearch" component={UserSearch} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Vet_Notification" component={Vet_Notification} />
            <Stack.Screen name="Petowner_Settings" component={Petowner_Settings} />
         </Stack.Navigator>
      </NavigationContainer>

   );
}
export default App