import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import SendMoney from "./components/SendMoney";


export default function App() {
 
  const Stack = createNativeStackNavigator();

  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"  
          component={HomeScreen} 
          options={{
            headerShown: false,
          }}
         />
        <Stack.Screen 
          name="Send" 
          component={SendMoney} 
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen name="Cashback" component={CashbackScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
