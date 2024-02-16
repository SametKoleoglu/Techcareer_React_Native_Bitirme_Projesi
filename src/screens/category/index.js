import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Category from "./Category";
import CategoryDetail from "./CategoryDetail";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

const CategoryStack = createStackNavigator();

export default function CategoryStackScreen({ navigation }) {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="Category"
        component={Category}
        options={{
          headerTitle: "Kategoriler",
        }}
      />
      <CategoryStack.Screen
        name="CategoryDetail"
        component={CategoryDetail}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Category");
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
          headerTitle: "Kategoti Detay",
        }}
      />
    </CategoryStack.Navigator>
  );
}
