import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import StartMeeting from "../src/components/StartMeeting";
import Chat from "../src/components/Chat";
import { Socket, io } from "socket.io-client";
import { Camera } from "expo-camera";
import { FontAwesome } from "expo-vector-icons";
// import axios from "axios";

let socket;

const menuIcons = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    customColor: "#efefef",
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop Video",
  },
  {
    id: 3,
    name: "upload",
    title: "Share Content",
  },
  {
    id: 4,
    name: "group",
    title: "Participants",
  },
];

export default function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState(["BOB"]);
  const [startCamera, setStartCamera] = useState(false);
  const [modalVIsible, setModalVisible] = useState(false);

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access Denied");
    }
  };

  const joinRoom = () => {
    __startCamera();
    socket.emit("join-room", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    socket = io("https://af23-5-52-21-144.ngrok.io");
    socket.on("connection", () => {
      console.log("connected");
      socket.on("all-users", (users) => {
        console.log("Active Users");
        console.log(users);
        console.log(name);
        console.log(users, "After We Clean Up");
        setActiveUsers(users);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Start Meeting Section */}

      <Modal
        animationType="slide"
        transparent={false}
        presentationStyle={"fullScreen"}
        visible={modalVIsible}
        onRequestClose={() => {
          setModalVisible(!modalVIsible);
        }}
      >
        <Chat modalVIsible={modalVIsible} setModalVisible={setModalVisible} />
      </Modal>

      {startCamera ? (
        /* Active User Section */
        <View style={styles.activeUsersContainer}>
          <View style={styles.cameraContainer}>
            <Camera
              type={"front"}
              style={{
                width: activeUsers.length <= 1 ? "100%" : 200,
                height: activeUsers.length <= 1 ? 600 : 200,
              }}
            ></Camera>

            {activeUsers
              .filter((user) => user.userName != name)
              .map((user, index) => (
                <View key={index} style={styles.activeUserContainer}>
                  <Text style={{ color: "white" }}>{user.userName}</Text>
                </View>
              ))}
          </View>
          <View style={styles.menu}>
            {menuIcons.map((icon, index) => (
              <TouchableOpacity key={index} style={styles.tile}>
                <FontAwesome name={icon.name} size={26} color={"#efefef"} />
                <Text style={styles.textTile}>{icon.title}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.tile}
              onPress={() => setModalVisible(true)}
            >
              <FontAwesome name={"comment"} size={26} color={"#efefef"} />
              <Text style={styles.textTile}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    width: 60,
    marginTop: 10,
  },
  textTile: {
    color: "white",
    marginTop: 5,
    fontSize: 7.6,
    fontWeight: "bold",
    textAlign: "center",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    alignItems: "center",
  },

  activeUsersContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  activeUserContainer: {
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
