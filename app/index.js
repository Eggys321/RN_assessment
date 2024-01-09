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
import { Stack, useRouter } from "expo-router";
import studentLoginPic from "../assets/studentlogin.png";
import StudentLogin from "../components/StudentLogin";
// import { TextInput } from "react-native-gesture-handler";

const Home = () => {
  const router = useRouter();
  return(
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <Stack.Screen
        options={{
            headerTitle:'',
            headerShadowVisible:false,
            headerStyle:{backgroundColor:'white'}
        }}
        
        />
        <StudentLogin/>
    
  </SafeAreaView>
    
  ) ;
};

export default Home;
