import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
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
          backgroundColor: "#fff",
        },
        headerTintColor: "#000",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerTitleStyle: {
          alignSelf: "center",
          fontSize: 30,
        },
      }}
    >
      <Stack.Screen
        name="ListOfFuelUps"
        component={ListOfFuelUps}
        options={{
          title: "Toyota",
          headerRight: () => <Text style={styles.headerRight}>Szűrő</Text>,
          headerLeft: () => <Text style={styles.headerLeft}>+</Text>,
        }}
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
  headerRight: {
    marginRight: 15,
    fontSize: 18,
    color: "#5cb075",
  },
  headerLeft: {
    fontSize: 30,
    marginLeft: 20,
    color: "#5cb075",
  },
});
