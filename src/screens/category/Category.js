import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Category = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/suppliers").then((res) => {
      setProducts(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <SafeAreaView style={{ justifyContent: "center", flex: 1 }}>
      {isLoading ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size={"large"} color="green" />
        </View>
      ) : (
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.view1}
              onPress={() => {
                navigation.navigate("CategoryDetail");
              }}
            >
              <Image
                source={{
                  uri: "https://img.freepik.com/free-photo/light-beam-crowd-people_1409-7694.jpg?t=st=1708087505~exp=1708091105~hmac=1581f7600aedb436bfde67a5839944d2549c8f426f3309dfd0c98db031502edd&w=1380",
                }}
                width={190}
                height={150}
                borderRadius={15}
              />
              <View style={styles.view2}>
                <Text style={{ color: "#fff" }}>{item.companyName}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  view1: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    marginHorizontal: 10,
    gap: 10,
  },
  view2: {
    flex: 1,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "green",
    padding: 10,
  },
});
