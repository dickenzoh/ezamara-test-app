import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import { View, Text } from "react-native";
import { UserContext } from "../../UserContext";

const HomeStackNavigator = () => {
  const [currUser, setCurrUser] = useState("");

  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/filter?key=email&value=${user.email}`)
      .then((res) => res.json())
      .then((data) => setCurrUser(data));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Image
            source={require("../../../assets/images/logy.jpg")}
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#fff",
              transform: [{ rotate: "200deg" }],
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {currUser && (
            <>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 10,
                }}
              >
                Welcome {`${user?.firstName} ${user?.lastName}`}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontType: "bold",
                  marginTop: 10,
                }}
              >
                Your Profile details is as follows:
              </Text>
              <View
                style={{
                  borderTopWidth: 2,
                  borderTopColor: "#ccc",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 10,
                  }}
                >
                  Age: {currUser.users[0]?.age}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 10,
                  }}
                >
                  Gender: {currUser.users[0]?.gender}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 10,
                  }}
                >
                  Email: {currUser.users[0]?.email}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 10,
                  }}
                >
                  Phone: {currUser.users[0]?.ein}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 10,
                  }}
                >
                  Birth Date: {currUser.users[0]?.birthDate}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 10,
                  }}
                >
                  Blood Group: {currUser.users[0]?.bloodGroup}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 10,
                  }}
                >
                  Height: {currUser.users[0]?.height}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 10,
                  }}
                >
                  Weight: {currUser.users[0]?.weight}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 10,
                  }}
                >
                  Eye Color: {currUser.users[0]?.eyeColor}
                </Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeStackNavigator;
