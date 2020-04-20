import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Pie from "react-native-pie";
import Graphic from "./components/Portfolio_Comps/Graphic";

export default function Portfolio() {
  const [items, setItems] = useState([
    { id: Math.random(), text: "Char1" },
    { id: Math.random(), text: "Char2" },
    { id: Math.random(), text: "Char3" },
    { id: Math.random(), text: "Char4" },
  ]);

  return (
    <View style={styles.container}>
      <Graphic />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});
