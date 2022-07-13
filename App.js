import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task  from './Components/task';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Todays task go here !*/}
      <view style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Todays task</Text>

      <view style={styles.items}>
      {/* This is where the task is go*/}
        <Task text={'Task 1'}/>
        <Task text={'Task 2'}/>
      </view>

      </view>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8BAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold'
},
items: {},
});

