import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Activity = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ActivityDetail");
        }}
        style={{
          width: 100,
          height: 50,
          backgroundColor: "green",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 30,
        }}
      >
        <Text style={{ color: "#fff" }}>Etkinlik Detay</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Activity;
