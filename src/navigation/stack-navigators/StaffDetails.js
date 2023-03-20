import { useRoute } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import { Text } from "react-native";
import CustomButton from "../../componets/CustomButton";

const StaffDetails = () => {
  const route = useRoute();

  const staff = route.params.staff;

  const onPress = () => {
    console.log("staff");
  };

  return (
    <View style={{ marginTop: 80, padding: 30 }}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name="back" />
      </TouchableOpacity>
      <View style={{ justifyContent: "center", fontWeight: "bold" }}>
        <Text>StaffDetails</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.rightView}>
          <Text style={styles.text}>Name:</Text>
          <Text style={styles.text}>Email:</Text>
          <Text style={styles.text}>Department:</Text>
          <Text style={styles.text}>Number:</Text>
          <Text style={styles.text}>Salary:</Text>
        </View>
        <View style={styles.leftView}></View>
        <View style={styles.leftView}>
          <Text style={styles.text}>{staff?.name}</Text>
          <Text style={styles.text}>{staff?.email}</Text>
          <Text style={styles.text}>{staff?.department}</Text>
          <Text style={styles.text}>{staff?.number}</Text>
          <Text style={styles.text}>{staff?.salary}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: "green",
            padding: 20,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 12,
              color: "#fff",
            }}
          >
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: "red",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 12,
              color: "#fff",
            }}
          >
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 30,
  },
  rightView: {
    flex: 1,
    alignItems: "flex-start",
  },
  leftView: {
    alignItems: "flex-end",
  },
  text: {
    marginBottom: 10,
  },
});

export default StaffDetails;
