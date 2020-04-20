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

const donationColor =
  //'#585a56';
  //'#0294a5'
  //'#1ecfd6';
  // '#51a2d9'
  "#f07995";

const textColor = "#f3f1f3";
//'#f1e0d6';
//'#a79c93';
//'#000D29'

export default function Donations() {
  return (
    <View style={styles.donation}>
      <Text style={styles.donationNumber}>$14,724</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  donation: {
    flex: 3,
    backgroundColor: donationColor, //'#81a3a7',

    //'#aba6bf',
    //'#595775', //purple

    justifyContent: "center",
    alignItems: "center",
  },

  donationNumber: {
    //'#f1f3f2',
    color:
      //  '#f1e0d6',
      textColor,

    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 54,
    fontWeight: "bold",
    fontFamily: "Futura",
  },
});
