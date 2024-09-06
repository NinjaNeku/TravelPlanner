import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { useHeaderHeight } from '@react-navigation/elements'

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="(tabs)" options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity className="ml-2" onPress={() => {}}>
              <Image source={{uri: 'https://xsgames.co/randomusers/avatar.php?g=male'}} className="w-10 h-10 rounded-lg"/>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity 
              className="mr-2 p-2 rounded-lg shadow-lg shadow-[#171717] shadow-opacity-20 shadow-offset-2 shadow-offset-y-4 shadow-radius-3"
              style={{backgroundColor: Colors.white}} 
              onPress={()=>{}}
            >
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
          )
        }}/>
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
