import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { navigationRef } from "./RootNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CustomComponent from "./components/CustomComponent";
import ListOfFuelUps from "./components/ListOfFuelUps";
import AddNew from "./components/AddNew";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#621FF7",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="ListOfFuelUps"
        component={ListOfFuelUps}
        options={{ title: "Tankolás lista" }}
      />
      <Stack.Screen
        name="AddNew"
        component={AddNew}
        options={{ title: "Users List" }}
      />
      <Stack.Screen
        name="CustomComponent"
        component={CustomComponent}
        options={{ title: "User Detail" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
