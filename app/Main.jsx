import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

// Function to generate a random string of a specific length
const generateRandomString = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const Main = () => {
  // Generate random name and user ID
  const randomName = generateRandomString(8);
  const randomUserId = generateRandomString(8);

  // String for QR code
  const qrString = randomName;

  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../assets/images/icon.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Name: </Text>
          <Text style={styles.fname}>{randomName}</Text>
          <Text style={styles.userId}>UserID:</Text>
          <Text style={styles.fuserId}>{randomUserId}</Text>
        </View>
      </View>
      <View style={styles.code}>
        <QRCode value={qrString} 
        logoSize={50}
        size={250} 
        logoMargin={5}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#C5283D',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fname: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 55,
    color: '#8B8000',
  },
  userId: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fuserId: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#8B8000',
  },
  code: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  }
  
});

export default Main;
