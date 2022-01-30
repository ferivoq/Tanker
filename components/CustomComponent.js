import React, { Component } from "react";
import * as RootNavigation from "../RootNavigation.js";
import {
  Button,
  View,
  Text,
  Platform,
  TextInput,
  StyleSheet,
  Image,
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
      <View style={(styles.container, { flexDirection: "row" })}>
        <View style={{ flex: 1 }}>
          <Image style={styles.icon} source={require("../assets/gas.png")} />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.typeText}>
            {this.props.FuelUp.typeof == "fuelUp" ? "Tankolás" : "Kocsimosás"}
          </Text>
          <Text style={styles.normalText}>{this.props.FuelUp.place}</Text>
          <Text style={styles.normalText}>{this.props.FuelUp.mileage} km</Text>
        </View>
        <View style={{ flex: 2, backgroundColor: "green" }} />
        {/* <Text style={styles.text}>
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
        <Text style={styles.text}>{this.consuption} l/100km</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6c757d",
    borderRadius: 20,
    width: 400,
    marginBottom: 10,
    padding: 10,
    flex: 1,
    padding: 20,
    marginTop: 10,
  },
  text: {
    color: "#fff",
    fontSize: 25,
  },
  typeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  normalText: { fontSize: 16 },
  icon: {
    width: 50,
    height: 50,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    backgroundColor: "#5cb075",
    borderRadius: 7,
  },
});
