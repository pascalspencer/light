import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useRouter } from "expo-router"; 

const Home = () => {
    const router = useRouter();

    let [fontsLoaded] = useFonts({
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/images/icon.png')}
                style={styles.image}
            />
            <Text style={styles.text}>Illuminati worldwide Official App</Text>
            <TouchableOpacity 
                style={[styles.button, { backgroundColor: '#FFDB58' }]}
                onPress={() => {
                    router.push('/Contact')
                }}>
                <Text style={styles.buttonText}>Enroll</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, { backgroundColor: '#FF69B4' }]}
                onPress={() => {
                    router.push('/Login')}}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C5283D"
    },
    text: {
        fontFamily: "Poppins_700Bold", 
        fontSize: 20,
    },
    image: {
        width: 300,
        height: 300,
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

export default Home;
