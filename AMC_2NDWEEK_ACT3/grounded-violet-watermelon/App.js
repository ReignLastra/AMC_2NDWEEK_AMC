import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>

      <Text style={styles.baseText}>
        I am Lastra
        <Text style={styles.innerText}> Reign</Text>
      </Text>

      <Text style={styles.basesText}>
        3rd Year College /
        <Text style={styles.grc}> GRC Caloocan</Text>
      </Text>

      <Text style={styles.wowText}>
        My favorite hobby
        <Text style={styles.games}> is basketball n exercising</Text>
      </Text>

      <Text style={styles.live}>
        I live in
        <Text style={styles.brgy}> brgy. 361.Veintereales Valenzuela CIty</Text>
      </Text>


    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
    color: 'blue',
    fontFamily: 'cancun',
  },
  innerText: {
    color: 'black',
    fontSize: '25px'
  },
  grc: {
    color: 'purple',
    fontWeight: 'bold',
    fontFamily: 'cancun' 
  },
  basesText: {
    fontWeight: 'bold',
    color: 'darkblue',
    fontFamily: 'cancun',
  },
  wowText: {
    color: 'cyan',
    fontFamily: 'calibri',
    fontWeight: 'bold'
  },
  games: {
    color: "brown",
  },

  brgy:{
    color: 'red',
    fontStyle: 'decorative',
    fontSize: '25px'
  }

});

export default BoldAndBeautiful;
