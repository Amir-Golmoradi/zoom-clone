import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import { FontAwesome } from "expo-vector-icons";

export default function Chat({ setModalVisible }) {
  const [messageText, setMessageText] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.safeAreaView}>
        <ChatHeader setModalVisible={setModalVisible} />
        <KeyboardAvoidingView
          style={styles.chatContainer}
          behavior={Platform.OS === "android" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
              <View style={styles.chatMessages}></View>
              {/* Type Messages */}
              <View style={styles.chatFormContainer}>
                <Text style={{ color: "white" }}> Send to: Everyone</Text>
                <View style={styles.chatForm}>
                  <TextInput
                    value={messageText}
                    onChangeText={(text) => setMessageText(text)}
                    style={styles.textInput}
                    placeholder="Tap here to chat"
                    placeholderTextColor="#595859"
                  />
                </View>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor: messageText ? "#0B71EB" : "#373838",
                  }}
                >
                  <FontAwesome name={"send"} size={18} color="#efefef" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  safeAreaView: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 25,
  },
  chatFormContainer: {
    borderColor: "#2f2f2f",
    borderTopWidth: 1,
    padding: 10,
  },
  textInput: {
    height: 45,
    color: "#efefef",
    borderColor: "#595859",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 35,
  },
  chatForm: {
    flex: 1,
    flexDirection: "column",
  },
  button: {
    height: 35,
    width: 35,
    marginLeft: 309,
    marginTop: 6,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  chatMessages: {
    flex: 1,
  },
});
