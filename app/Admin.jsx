import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, FlatList, Text, StyleSheet,TouchableOpacity } from 'react-native';
import 'react-native-get-random-values';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

const Admin = () => {
  const [firstName, setFirstName] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Load users from AsyncStorage when component mounts
    loadUsers();
  }, []);

  const saveUsers = async (usersData) => {
    try {
      await AsyncStorage.setItem('users', JSON.stringify(usersData));
    } catch (error) {
      console.error('Error saving users', error);
    }
  };

  const loadUsers = async () => {
    try {
      const userData = await AsyncStorage.getItem('users');
      if (userData !== null) {
        setUsers(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error loading users', error);
    }
  };

  const handleAddUser = () => {
    // Trim the firstName and check if it's empty
    if (firstName.trim() === '') {
      // Display an alert or a message to the user indicating that the first name is required
      alert('First name is required');
      return; // Exit the function without adding the user
    }
  
    // If firstName is not empty, proceed to add the user
    const userId = uuidv4();
    const newUser = {
      name: firstName,
      userId: userId
    };
  
    setUsers(prevUsers => [...prevUsers, newUser]);
    setFirstName(''); // Clear the input field after adding the user
  };

  const handleDeleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.userId !== userId));
};

  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text style={styles.userName}>{item.name}</Text>
      <Button title="Delete" onPress={() => handleDeleteUser(item.userId)} />
    </View>
  );

  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <TextInput
          style={styles.textBox}
          placeholder="Enter first name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddUser}>
          <Text style={styles.text}>Add User</Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={item => item.userId}
        ListEmptyComponent={<Text>No users</Text>}
      />
    </View>
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
    backgroundColor: "#808080"
  },
  text: {
    color: "#fff"
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  userName: {
    fontSize: 16,
    color: '#32373B',
    paddingHorizontal: 10,
  },
});

export default Admin;
