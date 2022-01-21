import React, { Component } from "react";
import * as RootNavigation from "../RootNavigation.js";
import {
  Button,
  View,
  Text,
  Platform,
  TextInput,
  StyleSheet,
} from "react-native";

export default class CustomComponent extends Component {
  static propTypes = {
    FuelUp: JSON,
    PreviousFuelUp: JSON,
  };

  constructor(props) {
    super(props);

    if (props.PreviousFuelUp != undefined) {
      var kmValue = props.FuelUp.mileage - props.PreviousFuelUp.mileage;
      this.km = kmValue.toString();

      var consuptionValue = (props.FuelUp.volume * 100) / kmValue;
      this.consuption = consuptionValue.toFixed(2).toString();

      var pricePerKmValue = props.FuelUp.price / kmValue;
      this.pricePerKm = pricePerKmValue.toFixed(2).toString();
    } else {
      this.km = "";
      this.consuption = "";
      this.pricePerKm = "";
    }
  }

  render() {
    return (
      <View style={styles.top}>
        <Text style={styles.text}>
          {this.props.FuelUp.price
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          Ft
        </Text>

        <Text style={styles.text}>
          {this.props.FuelUp.mileage
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          km
        </Text>

        <Text style={styles.text}>{this.props.FuelUp.volume} l</Text>

        <Text style={styles.text}>{this.km} km</Text>

        <Text style={styles.text}>{this.pricePerKm} Ft/km</Text>

        <Text style={styles.text}>{this.consuption} l/100km</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "top",
  },
  top: {
    backgroundColor: "#6c757d",
    borderRadius: 20,
    width: 400,
    marginBottom: 10,
    padding: 10,
  },
  text: {
    color: "#fff",
    fontSize: 25,
  },
});
