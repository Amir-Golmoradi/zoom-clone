import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: "#FF751F",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
  },
];

export default function Menu() {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: item.customColor ? item.customColor : "#0470DC",
            }}
          >
            <FontAwesome name={item.name} size={23} color="#efefef" />
          </TouchableOpacity>
          <Text style={styles.menuText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1f1f1f",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonContainer: {
    alignItems: "center",
    flex: 1,
  },

  button: {
    width: 50,
    height: 50,
    backgroundColor: "orange",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  menuText: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: 600,
  },
});
