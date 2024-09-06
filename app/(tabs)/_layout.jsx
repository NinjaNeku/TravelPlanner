import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'


export default function RootLayoutNav() {

  return (
    <>
      <StatusBar style='dark'/>
        <Tabs screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.bgColor,
            borderTopWidth: 0,
            padding: 0,
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: Colors.black,
          tabBarInactiveTintColor: "#999",
        }}>
            <Tabs.Screen name="home" options={{
              headerShown: false,
              tabBarIcon: ({color}) => (<Ionicons name="home" size={24} color={color}/>),
            }}/>
            <Tabs.Screen name="category" options={{
              headerShown: false,
              tabBarIcon: ({color}) => (<MaterialIcons name="space-dashboard" size={24} color={color}/>),
            }}/>
            <Tabs.Screen name="search" options={{
              headerShown: false,
              tabBarIcon: ({color}) => (<View style={{backgroundColor:Colors.primaryColor, paddingHorizontal: 16, paddingVertical: 12, borderRadius: 10, height: 50}} ><Ionicons name="search-outline" size={24} color={Colors.white}/></View>),
            }}/>
            <Tabs.Screen name="bookmarks" options={{
              headerShown: false,
              tabBarIcon: ({color}) => (<FontAwesome5 name="bookmark" size={24} color={color}/>),
            }}/>
            <Tabs.Screen name="profile" options={{
              headerShown: false,
              tabBarIcon: ({color}) => (<FontAwesome name="user-circle" size={24} color={color}/>),
            }}/>
        </Tabs>
    </>
  )
}