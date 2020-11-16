
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

const App = () => {

    useEffect(() => {
      SplashScreen.hide()
    });

  return (
    <View style={styles.container}>
      <Text >Hello</Text>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
 
});

export default App;
