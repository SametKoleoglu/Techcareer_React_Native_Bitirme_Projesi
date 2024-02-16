import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Activity, Home } from "../screens";
import {
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import CategoryStackScreen from "../screens/category";
import ActivityStackScreen from "../screens/activity";

const Bottom = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#000",
            fontStyle: "italic",
            fontSize: 11,
            fontWeight: "bold",
          },
        }}
      >
        <Bottom.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "Ana Sayfa",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Foundation name="home" size={24} color="green" />
              ) : (
                <Foundation name="home" size={24} color="#000" />
              ),
            tabBarLabel: "Ana Sayfa",
          }}
        />
        <Bottom.Screen
          name="CategoryStack"
          component={CategoryStackScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Octicons name="multi-select" size={24} color="green" />
              ) : (
                <Octicons name="multi-select" size={24} color="black" />
              ),
            tabBarLabel: "Kategoriler",
          }}
        />
        <Bottom.Screen
          name="ActivityStack"
          component={ActivityStackScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="select-marker"
                  size={26}
                  color="green"
                />
              ) : (
                <MaterialCommunityIcons
                  name="select-marker"
                  size={26}
                  color="black"
                />
              ),
            tabBarLabel: "Etkinlikler",
          }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}
