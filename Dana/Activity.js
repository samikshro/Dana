import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  VirtualizedList,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import Donation from "./components/Activity_Comps/Donation";
import TransactionList from "./components/Activity_Comps/TransactionList";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Donation />
      <TransactionList />
    </View>
  );
}
