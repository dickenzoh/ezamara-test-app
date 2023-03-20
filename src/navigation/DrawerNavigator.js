import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import HomeStackNavigator from "./stack-navigators/HomeStackNavigator";
import StaffStackNavigator from "./stack-navigators/StaffStackNavigator";
import ContinentStackNavigator from "./stack-navigators/ContinentStackNavigator";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import { UserContext } from "../UserContext";
import { ImageBackground } from "react-native";
import { Image } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const DrawerHeaderContent = (props) => {
    const { setUser } = React.useContext(UserContext);

    const handleSignout = () => {
      setUser(null);
    };

    return (
      <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#43ae37",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            top: -5,
          }}
        >
          <Text style={{ color: "#fff" }}>Home</Text>
        </View>

        <DrawerItemList {...props} />
        <View
          style={{
            padding: 20,
            borderTopWidth: 1,
            borderTopColor: "#ccc",
            marginTop: 400,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              handleSignout();
            }}
            style={{ paddingVertical: 15 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 5,
                }}
              >
                Sign out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
        },
      }}
      drawerContent={DrawerHeaderContent}
    >
      <Drawer.Screen
        name={"Home"}
        component={HomeStackNavigator}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={"Staff"}
        component={StaffStackNavigator}
        options={{
          drawerLabel: "Staff",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="account-tie"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={"Continents"}
        component={ContinentStackNavigator}
        options={{
          drawerLabel: "Continents",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="earth" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: "#551E18",
    fontWeight: "500",
  },
  drawerItem: {
    height: 50,
    justifyContent: "center",
  },
  drawerItemFocused: {
    backgroundColor: "#ba9490",
  },
});

export default DrawerNavigator;
