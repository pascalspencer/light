import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Stack } from 'expo-router';



const Login = () => {

  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [userId, setUserId] = useState('');

  const checkUser = () => {
    // Check if the user is the admin
    if (firstName === "Ken" && userId === "2024") {
      navigation.navigate("Admin");
      return;
    }

    if (firstName === "Morningstar" && userId === "babel666") {
      navigation.navigate("Main");
      return;
    }

    // Display an error message if the user is not found
    alert('User not found!');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.outer}>
      <View style={styles.container}>
        <Stack.Screen/>
        <TextInput
          style={styles.textBox}
          placeholder='First Name'
          placeholderTextColor='#CCCCCC'
          value={firstName}
          onChangeText={setFirstName}
        />
      
        <TextInput
          style={styles.textBox}
          placeholder='User ID'
          placeholderTextColor='#CCCCCC'
          value={userId}
          onChangeText={setUserId}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF69B4' }]}
          onPress={checkUser}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  outer: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C5283D"
  },
  textBox: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: "#32373B",
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
  },
});

export default Login;
