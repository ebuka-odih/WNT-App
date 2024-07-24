import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Audio, Video } from 'expo-av';

export default function StreamScreen() {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const startAudioPlayback = async () => {
    setIsLoading(true);
    const { sound } = await Audio.Sound.createAsync(
      { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
      { shouldPlay: true, isLooping: true }
    );
    setSound(sound);
    setIsPlaying(true);
    setIsLoading(false);
  };

  const togglePlayback = async () => {
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Wicrypt Data Streamer</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={isPlaying ? togglePlayback : startAudioPlayback}
        >
          <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Start Player'}</Text>
        </TouchableOpacity>
      )}

      <View style={styles.videoPlaceholder}>
          {isPlaying && (
          <Video
            source={{ uri: './assets/animation.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={true}
            resizeMode="contain" // Adjust this based on your needs
            shouldPlay
            isLooping
            style={styles.video}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  videoPlaceholder: {
    marginTop: 20,
    width: 300, // Adjust width as needed
    height: 300, // Adjust height as needed
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Adjust to match your design
    overflow: 'hidden', // Ensures that the video respects the rounded corners

  },
  video: {
    width: '100%',
    height: '100%',
    marginTop: 20,
    position: 'absolute',
  },
});