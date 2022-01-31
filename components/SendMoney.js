import { Text, View, TouchableOpacity, TextInput } from "react-native";
import tw from "tailwind-rn";
import {SafeAreaView} from 'react-native-safe-area-context';
import { AntDesign, Entypo, MaterialIcons, MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons'; 


function SendMoneyScreen({navigation}) {
    return (
        <SafeAreaView style={tw('flex-col'),{flex: 1,backgroundColor: 'white'}}>
            <View style={tw('flex flex-row px-2 py-3 items-center justify-between')}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={tw('left-2')}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <View style={tw('flex-row mx-4')}>
                    <Text style={tw('text-sm font-bold mx-4 text-blue-400')}>Help</Text>
                    <Text style={tw('text-sm font-bold text-blue-400')}>Settings</Text>
                </View>
            </View>

            <View style={tw('px-2 py-2 mx-2')}>
                <Text style={tw('text-2xl font-bold')}>Enter Mobile Number to Pay</Text>
                <Text style={tw('text-sm top-2')}>Send Money Directly to Bank Account or Wallet</Text>
            </View>

            <View style={tw('flex-row items-center justify-between mx-4 border border-blue-400 rounded-lg px-2 mt-6')}>
                <TextInput placeholder="Enter Mobile Number or Name" style={{fontSize: 17,paddingVertical: 8}} />
                <MaterialCommunityIcons name="alphabetical-variant" size={26} color="#08a4ff" />
            </View>

            <View style={tw('flex-row items-center mx-4 mt-5')}>
                <View style={tw('w-12 h-12 rounded-full bg-blue-50 items-center justify-center')}>
                    <AntDesign name="contacts" size={26} color="black" />
                </View>
                <Text style={tw('text-blue-400 mx-3 font-bold')}>Search Contacts</Text>
            </View>

            <View style={tw('my-4 bg-red-50')}> 
                <Text style={tw('px-4 py-2 text-sm font-bold tracking-wider')}>Recents</Text>
            </View>

        </SafeAreaView>
    )
}

export default SendMoneyScreen;