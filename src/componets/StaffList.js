import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const StaffList = ({ staffList }) => {
  console.log("staffu");
  console.log(staffList);
  const navigation = useNavigation();

  return (
    <>
      <FlatList
        data={staffList}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => (
          <StaffListItem staff={item} navigation={navigation} />
        )}
      />
    </>
  );
};

const StaffListItem = ({ staff, navigation }) => {
  console.log("single");
  console.log(staff);
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 2,
          borderBottomColor: "#ccc",
        }}
      >
        <View style={{ paddingVertical: 15, paddingRight: 5 }}>
          <MaterialCommunityIcons name="earth" color="green" size={40} />
        </View>

        <View style={styles.container}>
          <View style={styles.rightView}>
            <TouchableOpacity
              style={{ height: 80 }}
              onPress={() => navigation.navigate("StaffDetails", { staff })}
            >
              <Text>{staff?.name}</Text>
            </TouchableOpacity>
            <Text>{staff?.email}</Text>
          </View>
          <View style={styles.leftView}></View>
          <View style={styles.leftView}>
            <Text>{staff?.department}</Text>
            <Text>{staff?.number}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
  },
  rightView: {
    flex: 1,
    alignItems: "flex-start",
  },
  leftView: {
    alignItems: "flex-end",
  },
});

export default StaffList;
