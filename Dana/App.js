import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Activity from "./Activity";
import Portfolio from "./Portfolio";
import Server from "./server";

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

// var firebase = require("firebase/app");

// require("firebase/auth");
// require("firebase/firestore");

// var firebaseConfig = {
//   apiKey: "AIzaSyDK22X7sCRguMzRzlu_xQAl6sfFV0fpZZY",
//   authDomain: "dana-fff5d.firebaseapp.com",
//   databaseURL: "https://dana-fff5d.firebaseio.com",
//   projectId: "dana-fff5d",
//   storageBucket: "dana-fff5d.appspot.com",
//   messagingSenderId: "758855657507",
//   appId: "1:758855657507:web:e4582cd56bc9d7c5d72996",
//   measurementId: "G-JRG27F5TP5"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
