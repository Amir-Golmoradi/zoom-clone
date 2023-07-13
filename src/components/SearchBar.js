import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color="#858585" />
      <Text style={styles.SearchBar}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 15,
    marginHorizontal: -10,
    height: 40,
    width: "110%",
    alignItems: "center",
    borderRadius: 10,
  },
  SearchBar: {
    color: "#858585",
    paddingLeft: 10,
    fontSize: 20,
  },
});
