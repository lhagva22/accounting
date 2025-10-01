import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';  

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Login Page</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 2</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.text}>Box 3</Text>
      </View>
      
    </View>
    // aaa
    // bbbb
  );
}
