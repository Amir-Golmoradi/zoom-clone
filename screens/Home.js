import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Header from "../src/components/Header";
import SearchBar from "../src/components/SearchBar";
import Menu from "../src/components/MenuButton";
import Contact from "../src/components/ContactMenu";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <Menu />
      <Contact />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "#1c1c1c",
    padding: 50,
    height: "100%",
  },
});
