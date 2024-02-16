import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";

export default function CategoryDetail() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ alignSelf: "center", borderRadius: 15 }}
          width={250}
          height={200}
          source={{
            uri: "https://img.freepik.com/free-photo/view-futuristic-concert_23-2151073008.jpg?t=st=1708099743~exp=1708103343~hmac=ff6fd6db0ec5a48546cf227e88ab2724e583fec66a767910f923e248062a9141&w=1380",
          }}
        />
      </View>
      <View>
        <Text>Category Detail</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    padding: 5,
  },
});
