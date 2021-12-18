import React, { Component } from "react";

import { View, Text, Platform, TextInput, StyleSheet } from "react-native";

export default class AddNew extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <label>Dátum:</label>
        <TextInput style={styles.input} lable="datum" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
