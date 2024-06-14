import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Stack } from 'expo-router';
import * as MailComposer from 'expo-mail-composer';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState('');

  const sendEmail = async () => {
    let options = {
      subject: "New User",
      recipients: ["mutumajohn19@gmail.com"],
      body: `${firstName} ${secondName}, ${phoneNumber}, ${email}`,
    };

    try {
      const result = await MailComposer.composeAsync(options);
      setStatus("Status: email " + result.status);
    } catch (error) {
      setStatus("Status: email " + error.status);
    }
  };

  const handleSubmit = () => {
    // Check if required fields are empty
    if (!firstName || !email) {
      Alert.alert('Error', 'Please fill out all required fields');
      return;
    }

    // Check if email is in a valid format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    // Send email
    sendEmail();

    // Clear input fields
    setFirstName('');
    setSecondName('');
    setPhoneNumber('');
    setEmail('');

    // Set message
    setSubmitted('Submitted');

    // Access the details of user input here
    // console.log('First Name:', firstName);
    // console.log('Second Name:', secondName);
    // console.log('Phone Number:', phoneNumber);
    // console.log('Email:', email);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
    
      <View style={styles.inner}>
        <Stack.Screen/>
        <TextInput 
          style={styles.textBox} 
          placeholder='First Name' 
          placeholderTextColor='#CCCCCC'
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <TextInput 
          style={styles.textBox} 
          placeholder='Second Name' 
          placeholderTextColor='#CCCCCC'
          value={secondName}
          onChangeText={text => setSecondName(text)}
        />
        <TextInput 
          style={styles.textBox} 
          placeholder='Phone number' 
          placeholderTextColor='#CCCCCC'
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          keyboardType='phone-pad'
        />
        <TextInput 
          style={styles.textBox} 
          placeholder='Email' 
          placeholderTextColor='#CCCCCC'
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType='email-address'
        />
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#FFDB58' }]}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <Text>{submitted}</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C5283D",
  },
  textBox: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    color: '#000000' // Text color for user input
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

export default Contact;
