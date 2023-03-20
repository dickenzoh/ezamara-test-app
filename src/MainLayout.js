import "react-native-gesture-handler";
import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import LoginStackNavigator from "./navigation/stack-navigators/LoginStackNavigator";
import { UserContext } from "./UserContext";
import StaffDetails from "./navigation/stack-navigators/StaffDetails";

const MainLayout = () => {
  const [currUser, setCurrUser] = useState(null);
  const Stack = createStackNavigator();

  const { user } = useContext(UserContext);

  useEffect(() => {
    setCurrUser(user);
    console.log(user);
    console.log(currUser);
  }, [user]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigator">
        {currUser ? (
          <>
            <Stack.Screen
              name="DrawerNavigator"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StaffDetails"
              component={StaffDetails}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginStackNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainLayout;
