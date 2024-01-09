import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  TextInput,
} from "react-native";
import { useState } from "react";
import studentLoginPic from "../assets/studentlogin.png";
import { Stack, useRouter } from "expo-router";

const StudentLogin = () => {
    const [password,setPassword] = useState('');
    const [studentId,setStudentId] = useState('')
  const router = useRouter();
  const handleSignIn = () => {
    Keyboard.dismiss();
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <Image source={studentLoginPic} style={styles.heroImg} />

        <Text style={styles.signInText}>Sign In</Text>

        <Text style={styles.signInDescription}>
          Enter your login details to get started
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.studentId}> Student ID </Text>

          <TextInput style={styles.input} />
          <View style={styles.passwordContainer}>
            <Text style={styles.studentId}> Password </Text>

            <TextInput style={styles.input} />
          </View>
          <TouchableOpacity onPress={handleSignIn}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <Text style={styles.lastPart}>
          
          You do not have an account? Sign In
        </Text>
      </ScrollView>
    </>
  );
};

export default StudentLogin;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginLeft: 10,
  },
  heroImg: {
    maxWidth: 350,
    borderRadius: 10,
    // marginBottom:15
  },
  signInText: {
    color: "#0592F6",
    fontSize: 24,
    lineHeight: "37.2px",
    fontWeight: 700,
  },
  studentId: {
    color: "#275A7F",
    fontSize: "14px",
    lineHeight: "21.7px",
    fontWeight: 400,
  },
  signInDescription: {
    color: "#275A7F",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: "18.6px",
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#CDDBF8",
    borderWidth: 1,
    width: 350,
  },
  passwordContainer: {
    marginTop: 25,
  },
  addWrapper: {
    marginTop: 50,
    width: 351,
    height: 51,
    backgroundColor: "#0592F6",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: "19.36px",
    fontWeight: 600,
  },
  lastPart: {
    marginTop: 20,
    color: "#275A7F",
  },
});
