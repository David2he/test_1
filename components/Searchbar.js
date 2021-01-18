import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";


export default function Searchbar() {
    return (
        <View style={styles.container}>
            <Ionicons
            style={styles.iconTest}
            name="md-checkmark-circle"
            color="grey"
          />
           <TextInput style={styles.textInput} placeholder='test'></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 130,
      backgroundColor: "#eb4d4b",
      alignItems: "center",
      justifyContent: "center",
    },
    iconTest: {
        fontSize: 20,
     position: "absolute"
    },
    textInput: {
      marginTop: 30,
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.0)",
      backgroundColor: "#fff",
      width: 280,
      height: 45,
      overflow: "hidden",
      paddingLeft: 10,
      paddingRight: 10,
  
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
  
      borderRadius: 15,
    },
  });
