import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contacts = [
  {
    type: "starred",
  },
  {
    type: "contact",
    name: "Homer Simpson",
    photo: require("../../assets/images/homer-simpson.jpg"),
  },
  {
    type: "contact",
    name: "Pink Panther",
    photo: require("../../assets/images/pink-panther.jpg"),
  },
  {
    type: "contact",
    name: "Sponge Bob",
    photo: require("../../assets/images/sponge-bob.jpg"),
  },
];

export default function Contact() {
  return (
    <View style={styles.container}>
      {contacts.map((contact, index) =>
        contact.type == "starred" ? (
          <View key={index} style={styles.Row}>
            <View style={styles.starIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
            <View>
              <Text style={styles.text}>Starred</Text>
            </View>
          </View>
        ) : (
          <View key={index} style={styles.Row}>
            <Image source={contact.photo} style={styles.Img} />
            <View>
              <Text style={styles.text}>{contact.name}</Text>
            </View>
          </View>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  Row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },

  starIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontWeight: "bold",
    fontSize: 18,
  },

  Img: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
