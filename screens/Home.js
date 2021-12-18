// screens/AddUserScreen.js

import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

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

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {fuelUp.map((curr, i, array) => (
          <table onClick={() => this.props.navigation.navigate("AddNew")}>
            <tbody>
              <tr>
                <td>
                  <Text style={styles.text}>{curr.date}</Text>
                </td>
                <td>
                  <Text style={styles.text}>
                    {curr.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                    Ft
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>

          // <CustomComponent
          //   FuelUp={curr}
          //   PreviousFuelUp={i != 0 ? array[i - 1] : undefined}
          // />
        ))}
        <Button
          title="Go to user list"
          onPress={() => this.props.navigation.navigate("UserScreen")}
          color="#19AC52"
        />
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
  top: {
    backgroundColor: "#6c757d",
    borderRadius: 20,
    width: 1000,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 40,
  },
});

export default Home;
