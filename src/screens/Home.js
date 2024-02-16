import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Divider, TextInput } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const data = [
  {
    id: 1,
    cName: "Konser",
    description:
      "Norm Enderin Konuk olduğu Old School Turkish Rap, İstanbul Harbiye Açık Hava'da sahnede. Biletler Biletix'de",
    image:
      "https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?size=626&ext=jpg&ga=GA1.1.1449259610.1699740449&semt=sph",
    area: "ISTANBUL",
    date: "01-03-2000",
  },
  {
    id: 2,
    cName: "Tiyatro",
    description: "DESC1",
    image:
      "https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?size=626&ext=jpg&ga=GA1.1.1449259610.1699740449&semt=sph",
    area: "ISTANBUL",
    date: "02-03-2024",
  },
  {
    id: 3,
    cName: "Sergi",
    description: "DESC1",
    image:
      "https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?size=626&ext=jpg&ga=GA1.1.1449259610.1699740449&semt=sph",
    area: "ISTANBUL",
    date: "03-03-2024",
  },
];

const Home = ({ navigation }) => {
  const [datas, setData] = useState(data);

  const [isLoading, setIsLoading] = useState(true);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setStartDate(currentDate);
  };

  const searchByCategory = (category) => {
    var category = category.trim();

    let filteredData = data.filter((item) =>
      item.cName.toLocaleLowerCase().includes(category.toLocaleLowerCase())
    );

    setData(filteredData);
  };

  const searchByDate = () => {
    let startDate = dayjs(startDate);
  };

  return (
    <>
      {isLoading ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <ActivityIndicator size={"large"} color="green" />
        </View>
      ) : (
        <>
          <SafeAreaView
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              gap: 15,
            }}
          >
            <StatusBar style="dark" />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                borderWidth: 1,
                borderRadius: 15,
                padding: 5,
                borderColor: "green",
              }}
            >
              {" "}
              {dayjs(new Date()).format("DD MMMM dddd")}
            </Text>

            <TextInput
              underlineColor="transparent"
              underlineStyle={{ backgroundColor: "green" }}
              label={"Kategoriye göre ara"}
              x
              textColor="green"
              textBreakStrategy="highQuality"
              onChangeText={(text) => searchByCategory(text)}
              style={styles.input}
            />
          </SafeAreaView>

          <ScrollView style={{}} showsVerticalScrollIndicator={false}>
            {datas.map((item, index) => {
              return (
                <View key={index} style={styles.view1}>
                  <Image
                    borderRadius={10}
                    style={styles.image}
                    source={{
                      uri: item.image,
                    }}
                  />
                  <View style={styles.view2}>
                    <View style={{ alignItems: "center", paddingTop: 5 }}>
                      <Text style={{ fontWeight: "bold" }}>{item.cName}</Text>
                    </View>
                    <Text
                      style={{
                        color: "#fff",
                      }}
                    >
                      {item.description}
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "400",
                        textAlign: "center",
                      }}
                    >
                      Tarih : {dayjs(item.date).format("DD MMM YYYY")}{" "}
                      {item.area}
                    </Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  view1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginVertical: 20,
  },
  input: {
    width: "60%",
    borderRadius: 30,
    backgroundColor: "lightgrey",
    textAlign: "center",
    fontWeight: "bold",
  },
  view2: {
    backgroundColor: "green",
    width: "40%",
    borderRadius: 10,
    marginVertical: "5%",
    gap: 25,
    justifyContent: "space-around",
    paddingLeft: 3,
  },
  image: {
    width: 190,
    height: 190,
  },
  view4: {
    marginTop: 5,
    gap: 15,
    justifyContent: "space-around",
  },
});

export default Home;
