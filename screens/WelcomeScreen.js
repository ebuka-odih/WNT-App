import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: '../assets/bg.png' }}
        style={styles.background}
      >
        <Text style={styles.titleText}>WNT Streamer</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Stream')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 70,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    position: 'absolute',
    bottom: 50,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});