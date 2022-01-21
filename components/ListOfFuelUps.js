import React, { Component } from "react";
import AddNew from "./AddNew";
import CustomComponent from "./CustomComponent";
import { Alert } from "react-native";
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
    date: "2021.08.31",
    mileage: 189790,
    volume: 36.06,
    price: 15755,
  },
  {
    key: 2,
    date: "2021.09.05",
    mileage: 190164,
    volume: 33.12,
    price: 15035,
  },
  {
    key: 3,
    date: "2021.09.13",
    mileage: 190571,
    volume: 35.26,
    price: 15793,
  },
  {
    key: 4,
    date: "2021.09.28",
    mileage: 190947,
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
      <View style={styles.container}>
        <Button
          title={"3-Button Alert"}
          onPress={() => Rootnavigation.navigate("AddNew")}
        />
        {fuelUp.map((curr, i, array) => (
          <CustomComponent
            onStartShouldSetResponder={() => Rootnavigation.navigate("AddNew")}
            FuelUp={curr}
            PreviousFuelUp={i != 0 ? array[i - 1] : undefined}
          />
        ))}
      </View>
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
