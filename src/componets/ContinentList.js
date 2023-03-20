import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ContinentList = ({ continents }) => {
  return (
    <>
      <FlatList
        data={continents}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => <ContinentListItem continent={item} />}
      />
    </>
  );
};

const ContinentListItem = ({ continent }) => {
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
          <Text>{continent["m:sName"][0]}</Text>
          <Text>{continent["m:sCode"][0]}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    alignItems: "flex-start",
  },
  baseText: {
    fontWeight: "bold",
  },
  innerText: {
    padding: 15,
    color: "white",
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "green",
    borderWidth: 3,
  },
});

export default ContinentList;
