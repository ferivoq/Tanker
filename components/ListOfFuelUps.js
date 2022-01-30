import React, { Component } from "react";
import AddNew from "./AddNew";
import CustomComponent from "./CustomComponent";
import { Alert, ScrollView } from "react-native";
import * as Rootnavigation from "../RootNavigation";

import {
  View,
  Text,
  Platform,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import { RootTagContext } from "react-native/Libraries/ReactNative/RootTag";

const fuelUp = [
  {
    key: 1,
    typeof: "fuelUp",
    place: "Shell",
    date: "2021.05.23",
    mileage: 51800,
    volume: 36.06,
    price: 15755,
  },
  {
    key: 2,
    typeof: "fuelUp",
    place: "Shell",
    date: "2021.05.21",
    mileage: 51800,
    volume: 33.12,
    price: 15035,
  },
  {
    key: 3,
    typeof: "fuelUp",
    place: "Shell",
    date: "2021.04.23",
    mileage: 51800,
    volume: 35.26,
    price: 15793,
  },
  {
    key: 4,
    typeof: "fuelUp",
    place: "Shell",
    date: "2021.04.30",
    mileage: 51800,
    volume: 33.53,
    price: 14000,
  },
  {
    key: 4,
    typeof: "asd",
    place: "Shell",
    date: "2021.03.1",
    mileage: 51800,
    volume: 33.53,
    price: 14000,
  },
  {
    key: 4,
    typeof: "fuelUp",
    place: "Shell",
    date: "2021.2.24",
    mileage: 51800,
    volume: 33.53,
    price: 14000,
  },
  {
    key: 4,
    typeof: "fuelUp",
    place: "Shell",
    date: "2021.2.12",
    mileage: 51800,
    volume: 33.53,
    price: 14000,
  },
];
export default class ListOfFuelUps extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }
  showAlert1() {
    // Alert.alert("Alert Title", "My Alert Msg", [
    //   {
    //     text: "Cancel",
    //     onPress: () => console.log("Cancel Pressed"),
    //     style: "cancel",
    //   },
    //   { text: "OK", onPress: () => console.log("OK Pressed") },
    // ]);
  }
  render() {
    var that = this;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/* <Button
          title={"3-Button Alert"}
          onPress={() => Rootnavigation.navigate("AddNew")}
        /> */}
        {fuelUp.map((curr, i, array) => (
          <CustomComponent
            onStartShouldSetResponder={() => Rootnavigation.navigate("AddNew")}
            FuelUp={curr}
            PreviousFuelUp={i != 0 ? array[i - 1] : undefined}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    // paddingTop: "20px",
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});
