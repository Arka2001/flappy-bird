/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './Physics';


const App = () => {

  const [running, setRunning] = useState(false);

  useEffect(() => {
    setRunning(true)
  }, [])

  return (
    <View style={styles.container}>
      <GameEngine style={styles.gameEngine} entities={entities()} systems={[Physics]} running= {running} 
       ></GameEngine>


      <StatusBar style='auto' hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#000000'
  },
   gameEngine: {
     position: 'absolute',
     top: 0, // These dimensions are given so that any component inside the game engine stays inside the screen and there is not flex error
     left: 0,
     right: 0,
     bottom: 0
   }
});

export default App;