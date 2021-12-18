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
        <table
          onClick={() => {
            RootNavigation.navigate("AddNew");
          }}
        >
          <tbody>
            <tr>
              <td>
                <Text style={styles.text}>{this.props.FuelUp.date}</Text>
              </td>
              <td>
                <Text style={styles.text}>
                  {this.props.FuelUp.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  Ft
                </Text>
              </td>
            </tr>
            <tr>
              <td>
                <Text style={styles.text}>
                  {this.props.FuelUp.mileage
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  km
                </Text>
              </td>
              <td>
                <Text style={styles.text}>{this.props.FuelUp.volume} l</Text>
              </td>
            </tr>
            <tr>
              <td>
                <Text style={styles.text}>{this.km} km</Text>
              </td>
              <td>
                <Text style={styles.text}>{this.pricePerKm} Ft/km</Text>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <Text style={styles.text}>{this.consuption} l/100km</Text>
              </td>
            </tr>
          </tbody>
        </table>
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
    width: 1000,
    marginBottom: 10,
    padding: "10px",
  },
  text: {
    color: "#fff",
    fontSize: 25,
  },
});
