import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Pie from "react-native-pie";

export default function Graphic() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Portfolio</Text>
      <Pie
        radius={80}
        innerRadius={50}
        sections={[
          {
            percentage: 10,
            color: "#C70039",
          },
          {
            percentage: 20,
            color: "#44CD40",
          },
          {
            percentage: 30,
            color: "#404FCD",
          },
          {
            percentage: 40,
            color: "#EBD22F",
          },
        ]}
        strokeCap={"butt"}
      />
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
