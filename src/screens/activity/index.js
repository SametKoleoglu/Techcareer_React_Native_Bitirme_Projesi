import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Activity from "./Activity";
import ActivityDetail from "./ActivityDetail";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const ActivityStack = createStackNavigator();

export default function ActivityStackScreen({ navigation }) {
  return (
    <ActivityStack.Navigator>
      <ActivityStack.Screen
        name="Activity"
        component={Activity}
        options={{
          headerTitle: "Etkinlikler",
        }}
      />
      <ActivityStack.Screen
        name="ActivityDetail"
        component={ActivityDetail}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Activity");
              }}
              style={{
                backgroundColor: "green",
                alignItems: "center",
                justifyContent: "center",
                width: 35,
                borderWidth: 1,
                borderRadius: 25,
                height: 35,
                marginLeft: 10,
              }}
            >
              <Octicons name="chevron-left" size={30} color="#fff" />
            </TouchableOpacity>
          ),
          headerTitle: "Etkinlik Detay",
        }}
      />
    </ActivityStack.Navigator>
  );
}
