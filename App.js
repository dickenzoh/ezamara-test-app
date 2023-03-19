import "react-native-gesture-handler";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import LoginStackNavigator from "./src/navigation/stack-navigators/LoginStackNavigator";
import MainLayout from "./src/MainLayout";
import { UserProvider } from "./src/UserContext";

const App = () => {
  return (
    <UserProvider>
      <MainLayout />
    </UserProvider>
  );
};

export default App;
