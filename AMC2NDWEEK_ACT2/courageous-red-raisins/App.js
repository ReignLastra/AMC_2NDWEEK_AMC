import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Reign");
  const bodyText = 'nye';

  const onPressTitle = () => {
    setTitleText("Lastra Reign" + 
                  '\n'+
                  '\n'+
                "21yr old" +
                '\n'+
                  '\n'+
                "3rd Year College In GRC Caloocan"+ 
                '\n'+
                  '\n'+
                "Valenzuela City, Home"
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default TextInANest;
