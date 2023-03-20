import React, { useState } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import axios from "axios";
//import InputField from "../components/InputField";
import { StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

const initialState = {
  staffnumber: "",
  staffname: "",
  staffemail: "",
  department: "",
  salary: "",
};

const AddStaffForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const API_BASE_URL =
    "https://crudcrud.com/api/c95c6f5dd1c34a21b56d970583e70654";

  const createStaff = async () => {
    const data = {
      name,
      number,
      department,
      salary,
      email,
    };
    const values = Object.values(data);
    const isEmpty = values.some(
      (value) => value === "" || value === null || value === undefined
    );
    if (isEmpty) {
      console.log("Data is not complete");
      setError("Make sure all the field are filled");
    } else {
      const response = await axios.post(`${API_BASE_URL}/zamara`, data);
      console.log(response.data);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        Add New Staff
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

      <View style={styles.row}>
        <Text style={styles.text}>Name:</Text>
        <TextInput
          name="name"
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Number:</Text>
        <TextInput
          name="number"
          style={styles.input}
          onChangeText={(text) => setNumber(text)}
          value={number}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Email:</Text>
        <TextInput
          name="email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Department:</Text>
        <TextInput
          name="department"
          style={styles.input}
          onChangeText={(text) => setDepartment(text)}
          value={department}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Salary:</Text>
        <TextInput
          name="staffnumber"
          style={styles.input}
          onChangeText={(text) => setSalary(text)}
          value={salary}
        />
      </View>
      <Pressable style={styles.button} onPress={createStaff}>
        <Text style={styles.text}>Create</Text>
      </Pressable>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          marginTop: 30,
        }}
      >
        Staff List
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    paddingHorizontal: 40,
  },
  text: {
    flex: 1,
    marginTop: 8,
    textDecorationColor: "white",
  },
  input: {
    flex: 2,
    height: 40,
    width: 250,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 20,
    padding: 10,
  },
  button: {
    alignItems: "center",
    width: 250,
    justifyContent: "center",
    paddingBottom: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
    marginVertical: 20,
  },
  btn: {
    height: 40,
    width: 250,
    color: "#841584",
    margin: 20,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 20,
    padding: 10,
  },
});

export default AddStaffForm;
