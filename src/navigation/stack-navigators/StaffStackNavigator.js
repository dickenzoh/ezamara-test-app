import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import StaffList from "../../componets/StaffList";
import axios from "axios";
import AddStaffForm from "../../componets/AddStaffForm";
import { View } from "react-native";
import { ScrollView } from "react-native";

const API_BASE_URL =
  "https://crudcrud.com/api/c95c6f5dd1c34a21b56d970583e70654";

const StaffStackNavigator = () => {
  const [staffList, setStaffList] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);

  const navigate = console.log("staffList");
  console.log(staffList);

  const fetchStaffList = async () => {
    const response = await axios.get(`${API_BASE_URL}/zamara`);
    setStaffList(response.data);
  };

  useEffect(() => {
    fetchStaffList();
  }, []);
  return (
    <ScrollView>
      <View>
        <AddStaffForm />
      </View>
      <View>
        <StaffList staffList={staffList} />
      </View>
    </ScrollView>
  );
};

export default StaffStackNavigator;

const styles = StyleSheet.create({});
