import React, { Component } from "react";
import AddNew from "./AddNew";
import CustomComponent from "./CustomComponent";
import ActionButton from "react-native-action-button";

import {
  View,
  Text,
  Platform,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";

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
  render() {
    var that = this;
    return (
      <View style={styles.container}>
        {fuelUp.map((curr, i, array) => (
          <CustomComponent
            FuelUp={curr}
            PreviousFuelUp={i != 0 ? array[i - 1] : undefined}
          />
        ))}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="New Task"
            onPress={() => console.log("notes tapped!")}
          >
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Notifications"
            onPress={() => {}}
          >
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#1abc9c"
            title="All Tasks"
            onPress={() => {}}
          >
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "20px",
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});
