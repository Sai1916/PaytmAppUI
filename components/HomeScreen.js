import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import tw from "tailwind-rn";
import { AntDesign, Entypo, MaterialIcons, MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons'; 

const HomeScreen = () => {
  return (
    <View style={tw('flex-1 flex-col bg-blue-200')}>
      <View style={tw('flex flex-row items-center pt-9 px-5 justify-between')}>
        <View style={tw('mr-7')}>
          <View style={tw('flex items-center justify-center px-1.5 py-1.5 rounded-full bg-red-500')}>
            <Text style={tw('text-white font-bold text-sm')}>CS</Text>
          </View> 
            <View style={tw('px-0.5 py-0.5 items-center rounded-full bg-gray-200 absolute mt-5 left-5')}>
              <Entypo name="menu" size={12} color="black" />
            </View>
        </View>
        <Image source = {require('../assets/paytm_logo.png')} style={tw('w-20 h-20')}/> 
        <View style={tw('flex flex-row w-16 items-center justify-between')}>
          <AntDesign
            name="search1"  
            size={24} 
            color="#4a5e94" 
          />
          <Entypo 
            name="chat" 
            size={24} 
            iconsStyle={{
              borderColor:"#4a5e94",
              borderWidth:1,
              color: 'white'
            }}
            color="#4a5e94" 
          />
        </View>
      </View>

      <View style={tw('flex flex-col'), {backgroundColor:'white', flex:1, borderRadius:30}} >
            <View style={tw('h-6 flex items-center bottom-2')}>
              <AntDesign name="minus" size={42} color="black" />
            </View>
            <ScrollView>
              <View style={tw('flex flex-col mx-4 my-2 px-3 py-1 border border-gray-200 rounded-xl')}>

                <View style={tw('flex flex-row justify-between')}>
                  <View style={tw('flex flex-col')}>
                    <View style={tw('flex flex-row items-center')}>
                      <Text style={tw('text-base font-bold')}>UPI Payments</Text>
                      <Image source={require('../assets/upi.png')} style={tw('w-8 h-8')} />
                    </View>
                    <Text style={tw('text-xs text-gray-400 mt-0')}>To any App or Bank A/c</Text>
                  </View>
                  <View style={tw('flex flex-row items-center justify-center')}>
                    <Text style={tw('text-lg font-bold text-gray-300 mr-1')}>Recent</Text>
                    <View style={tw('top-0.5')}>
                      <SimpleLineIcons name="arrow-right" size={12} color="lightgray" />
                    </View>
                  </View>
                </View>
                
                <View style={tw('flex flex-row py-4 items-center justify-between')}>
                  <View style={tw('flex flex-col items-center h-16 justify-between')}>
                    <MaterialIcons name="qr-code-scanner" size={32} color="#4a5e94" />
                    <Text style={tw('text-xs font-bold')}>Scan & Pay</Text>
                  </View>
                  <View style={tw('flex flex-col items-center h-16 justify-between')}>
                    <AntDesign name="contacts" size={32} color="#4a5e94" />
                    <Text style={tw('text-xs font-bold')}>To Mobile</Text>
                  </View>
                  <View style={tw('flex flex-col items-center h-16 justify-between')}>
                    <Image source={require('../assets/self_user.png')} style={tw('w-12 h-10')} />
                    <Text style={tw('text-xs font-bold')}>To Self</Text>
                  </View>
                  <View style={tw('flex flex-col items-center h-16 justify-between')}>
                  <MaterialCommunityIcons name="bank-outline" size={32} color="#4a5e94" />
                    <Text style={tw('text-xs font-bold')}>To Bank A/c</Text>
                  </View>
                </View>

              </View>

              <View style={tw('flex flex-col mx-4 my-2 border border-gray-200 rounded-xl')}>
                
                <View style={tw('px-3 py-1')}>
                  <View style={tw('flex flex-row justify-between py-1')}>
                    <Text style={tw('text-lg font-bold')}>Offers for you</Text>
                  </View>
                  
                  <View style={tw('flex flex-row py-2 items-center justify-between')}>
                    <View style={tw('flex flex-col items-center h-24 justify-between')}>
                      <Image source={require('../assets/recharge.png')} style={tw('w-16 h-16')} />
                      <Text style={tw('text-xs font-bold bottom-2')}>Recharge</Text>
                    </View>
                    <View style={tw('flex flex-col items-center h-28 justify-between')}>
                      <View style={tw('px-1 py-0.5 bg-yellow-300 rounded top-2')}>
                        <Text style={{fontSize: 9,fontWeight: 'bold'}}>Min.₹10</Text>
                      </View>
                      <Image source={require('../assets/bhim_upi.png')} style={tw('w-10 h-10 bottom-3')} />
                      <Image source={require('../assets/gift.png')} style={tw('w-4 h-4 absolute top-12 left-6')}/>
                      <Text style={tw('text-xs font-bold bottom-4')}>UPI Gift</Text>
                    </View>
                    <View style={tw('flex flex-col items-center h-20 justify-between')}>
                      <View style={tw('top-2')}>
                        <MaterialIcons name="qr-code-scanner" size={34} color="#4a5e94" />
                      </View>
                      <View style={{flexDirection: 'row',wordBreak: "break-word",alignItems: 'center'}}>
                        <Text style={tw('text-xs font-bold')}>Scan QR & Pay</Text>
                      </View>
                    </View>
                    <View style={tw('flex flex-col items-center h-20 w-16 justify-between')}>
                      <Image source={require('../assets/addMoney.png')} style={tw('w-12 h-12')} />
                      <View style={{flexDirection: 'row',wordBreak: "break-word",alignItems: 'center'}}>
                        <Text style={tw('text-xs font-bold')}>Add Money</Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={tw('flex flex-row items-center justify-between px-2 py-2 bg-blue-50 rounded-b-xl')}>
                  <View style={tw('flex flex-row items-center')} >
                    <Text style={tw('text-xs')}>Choose any offer & get ₹10-100 cashback </Text>
                    <Image source={require('../assets/money-bag.png')} style={tw('w-3 h-3')} />
                  </View>
                  <MaterialIcons name="keyboard-arrow-right" size={18} color="black" />
                </View>

              </View>


              <View style={tw('flex flex-col mx-4 my-2 border border-gray-200 rounded-xl')}>
                
                <View style={tw('px-3 py-1')}>
                  <View style={tw('flex flex-row justify-between py-1')}>
                    <Text style={tw('text-lg font-bold')}>My Paytm</Text>
                  </View>
                  
                  <View style={tw('flex flex-row py-2 items-center justify-between')}>
                    <View style={tw('flex flex-col items-center h-24 w-20 justify-between')}>
                      <View style={tw('px-1 py-0.5 bg-yellow-300 rounded mb-1')}> 
                        <Text style={{fontSize: 9,fontWeight: 'bold'}}>Passbook</Text>
                      </View>
                      <SimpleLineIcons name="notebook" size={32} color="#4a5e94" />
                      <View style={{flex:1,flexDirection: 'row',wordBreak: "break-word",alignItems: 'center',justifyContent: 'center'}}>
                        <Text style={tw('text-xs font-bold top-1')}>Balance & History</Text>
                      </View>
                    </View>
                    <View style={tw('flex flex-col items-center h-24 justify-between')}>
                      <Image source={require('../assets/bhim_upi.png')} style={tw('w-10 h-10 bottom-3')} />
                      <Image source={require('../assets/gift.png')} style={tw('w-4 h-4 absolute top-12 left-6')}/>
                      <Text style={tw('text-xs font-bold bottom-4')}>Paytm Bank</Text>
                    </View>
                    <View style={tw('flex flex-col items-center h-24 justify-between')}>
                    <View style={tw('px-1 py-0.5 bg-yellow-300 rounded mb-1')}>
                        <Text style={{fontSize: 9,fontWeight: 'bold'}}>Wow Days</Text>
                      </View>
                        <MaterialIcons name="qr-code-scanner" size={34} color="#4a5e94" />
                      <View style={{flexDirection: 'row',wordBreak: "break-word",alignItems: 'center'}}>
                        <Text style={tw('text-xs font-bold')}>Paytm Wallet</Text>
                      </View>
                    </View>
                    <View style={tw('flex flex-col items-center h-20 w-16 justify-between')}>
                      <Image source={require('../assets/addMoney.png')} style={tw('w-12 h-12')} />
                      <View style={{flex:1,flexDirection: 'row',wordBreak: "break-word",alignItems: 'center',justifyContent: 'center'}}>
                        <Text style={tw('text-xs font-bold')}>Paytm Postpaid</Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={tw('flex flex-row items-center justify-between px-2 py-2 bg-blue-50 rounded-b-xl')}>
                  <View style={tw('flex flex-row items-center')} >
                    <Text style={tw('text-xs')}>Choose any offer & get ₹10-100 cashback </Text>
                    <Image source={require('../assets/money-bag.png')} style={tw('w-3 h-3')} />
                  </View>
                  <MaterialIcons name="keyboard-arrow-right" size={18} color="black" />
                </View>

              </View>


            </ScrollView>
      </View>     
    </View>
  );
};

export default HomeScreen;
