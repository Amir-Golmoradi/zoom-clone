import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

export default function StartMeeting({
  name,
  setName,
  roomId,
  setRoomId,
  joinRoom,
}) {
  return (
    <View style={styles.startMeeting}>
      <View style={styles.Info}>
        <TextInput
          value={name}
          placeholder="Enter name"
          placeholderTextColor="#767476"
          onChangeText={(text) => setName(text)}
          style={styles.textInput}
        />
      </View>
      <View style={styles.Info}>
        <TextInput
          value={roomId}
          placeholder="Enter room id"
          placeholderTextColor="#767476"
          onChangeText={(text) => setRoomId(text)}
          style={styles.textInput}
        />
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={() => joinRoom()} style={styles.startButton}>
          <Text style={styles.textButton}>Start Meeting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    margin: 3,
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    fontSize: 18,
  },

  startButton: {
    marginTop: "10%",
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470dc",
    height: 50,
    borderRadius: 15,
  },

  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
