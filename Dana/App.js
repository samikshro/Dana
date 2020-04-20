import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Activity from "./Activity";
import Portfolio from "./Portfolio";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: styles.nav,
        }}
      >
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Portfolio" component={Portfolio} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  nav: {
    borderTopColor: "darkslategrey",
  },
});
