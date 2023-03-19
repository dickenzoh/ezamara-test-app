import React, { useContext, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../../componets/CustomButton";
import InputField from "../../componets/InputField";
import { Image } from "react-native";
import { UserContext } from "../../UserContext";

const LoginStackNavigator = ({ navigation }) => {
  const [username, setUsername] = useState("kminchelle");
  const [pass, setPass] = useState("0lelplR");
  const [error, setError] = useState("");

  const { setUser } = useContext(UserContext);

  // Define a function that checks if the user exists
  const checkUserExists = async (username, pass) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/checkUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: pass,
        }),
      });
      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error(error);
      // Handle the error here
    }
  };

  const handleLogin = async () => {
    console.log(username);
    console.log(pass);
    setError("");
    if (!username || !pass) {
      console.error("Username and password are required.");
      setError("Username and password are required.");
    } else {
      try {
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: pass,
          }),
        });
        const data = await response.json();
        if (data) {
          setUser(data);
          console.log(data);
        } else {
          setError("Username or password does not exist");
        }
      } catch (error) {
        console.error(error);
        // Handle the error here
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/images/zamara-logo.png")}
            style={{ width: "100%", height: 100, marginBottom: 30 }}
          />
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Login
        </Text>
        {error && (
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color: "red",
              marginBottom: 30,
            }}
          >
            {error}
          </Text>
        )}

        <InputField
          label={"Username"}
          value={username}
          onChangeText={(value) => setUsername(value)}
          icon={
            <MaterialIcons
              name="account-circle"
              size={20}
              color="#43ae37"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={"Password"}
          value={pass}
          onChangeText={(value) => setPass(value)}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#43ae37"
              style={{ marginRight: 5 }}
            />
          }
          inputType="text"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />

        <CustomButton
          label={"Login"}
          onPress={() => {
            handleLogin();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginStackNavigator;
