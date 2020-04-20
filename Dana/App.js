import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView,
  VirtualizedList, ScrollView
} from 'react-native';
import Constants from 'expo-constants';

const textColor = '#f3f1f3';
//'#f1e0d6';
//'#a79c93';
//'#000D29'




const donationColor =
  //'#585a56';
  //'#0294a5'
  //'#1ecfd6';
  // '#51a2d9'
  '#f07995'
  

const itemColor =
  //'#bf988f';
  //'#edd170';
  //'#f4e3b1'
//'#d96b0c'
//'#d2b48c'
// '#b9e5f3'
// '#a58e87'
// '#b5b3be'
// '#d3d0da'
// '#c8d6ca'
// '#afbadc'
'#c2d3da'

const DATA = [];

const getItem = (data, index) => {
  return {
    id: Math.random().toString(12).substring(0),
    title: `+$${Math.random().toString().substring(0, 4)}`,
    desc: `$${Math.random().toString().substring(3, 4) +
      Math.random().toString().substring(1, 4)} Starbucks`
  }
}

const getItemCount = (data) => {
  return 50;
}

const Item = ({ title, desc }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}> {desc}</Text>
    </View>
  );
}

function Donations() {
  return (
    <View style={styles.donation}>
      <Text style={styles.donationNumber}>$14,724</Text>
    </View>


  )
}

function TransactionList() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} desc={item.desc} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}



export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Donations />
      <TransactionList />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: //'#f1f3f2',
      //'#f1e0d6',
      textColor,

    alignItems: 'stretch',
    justifyContent: 'center',
    // marginTop: Constants.statusBarHeight
  },

  item: {
    backgroundColor: itemColor,//'#c2d3da',
    // '#81a3a7',
    // '#be9063', //chai
    // '#aba6bf', light purple
    //'#583e2e', //brown
    //beige/brown
    //'#d2b48c', //tan

    height: 130,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,

    // alignItems: 'stretch'
  },
  title: {
    fontSize: 40,
    color: //'#f1f3f2' 
    //'#000D29',
      textColor,//light pink,
    fontFamily: 'Futura'
  },

  desc: {
    fontSize: 20,
    color: textColor,
    fontFamily: 'Futura'
  },

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },

  donation: {
    flex: 3,
    backgroundColor: donationColor,//'#81a3a7',

    //'#aba6bf',
    //'#595775', //purple

    justifyContent: 'center',
    alignItems: 'center',
  },

  donationNumber: {
    color: //'#f1f3f2',
      //  '#f1e0d6',
      textColor,

    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 54,
    fontWeight: 'bold',
    fontFamily: 'Futura'
  }
});
