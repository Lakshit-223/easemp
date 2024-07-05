import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const addDetails = () => {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");

  const handleRegister = () => {
    const employeeData = {
      employeeName: name,
      employeeId: employeeId,
      designation: designation,
      phoneNumber: mobileNo,
      dateOfBirth: dob,
      joiningDate: joiningDate,
      activeEmployee: true,
      salary: salary,
      address: address,
    };
    axios
      .post("https://localhost:8000/addEmployee", employeeData)
      .then((response) => {
        Alert.alert("Done", "Employee registered successfully!");
        setName("");
        setEmployeeId("");
        setDob("");
        setMobileNo("");
        setJoiningDate("");
        setSalary("");
        setAddress("");
        setDesignation("");
      }).catch((error) => {
        Alert.alert("Registration Failed!", "Unknown error occured!")
        console.log("user registration failed: ", error);
      })
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "600" }}>
          Add a New Employee
        </Text>
        <TextInput
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 10,
          }}
          placeholder="India"
          placeholderTextColor={"black"}
        />
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "600" }}>Full Name</Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={{
              padding: 10,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 10,
              fontWeight: "400",
            }}
            placeholder="Full Name"
            placeholderTextColor={"#757575"}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "600" }}>Employee ID</Text>
          <TextInput
            value={employeeId}
            onChangeText={(text) => setEmployeeId(text)}
            style={{
              padding: 10,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 10,
              fontWeight: "400",
            }}
            placeholder="Ex. 221IT040"
            placeholderTextColor={"#757575"}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "600" }}>Designation</Text>
          <TextInput
            value={designation}
            onChangeText={(text) => setDesignation(text)}
            style={{
              padding: 10,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 10,
              fontWeight: "400",
            }}
            placeholder="Designation"
            placeholderTextColor={"#757575"}
          />
        </View>
        <View>
          <Text style={{ fontSize: 17, fontWeight: "600" }}>Mobile Number</Text>
          <TextInput
            value={mobileNo}
            onChangeText={(text) => setMobileNo(text)}
            style={{
              padding: 10,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 10,
              fontWeight: "400",
            }}
            placeholder="10 digit phone number"
            placeholderTextColor={"#757575"}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "600" }}>Date of Birth</Text>
          <TextInput
            value={dob}
            onChangeText={(text) => setDob(text)}
            style={{
              padding: 10,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 10,
              fontWeight: "400",
            }}
            placeholder="DD/MM/YYYY"
            placeholderTextColor={"#757575"}
          />
        </View>
        <View>
          <Text style={{ fontSize: 17, fontWeight: "600" }}>Joining Date</Text>
          <TextInput
            value={joiningDate}
            onChangeText={(text) => setJoiningDate(text)}
            style={{
              padding: 10,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 10,
              fontWeight: "400",
            }}
            placeholder="DD/MM/YYYY"
            placeholderTextColor={"#757575"}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            padding: 10,
          }}
        >
          <Text style={{}}>Active Employee</Text>
          <Text style={{ fontWeight: "500", color: "green", fontSize: 14 }}>
            True
          </Text>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Salary</Text>
          <TextInput
            value={salary}
            onChangeText={(text) => setSalary(text)}
            style={{
              padding: 10,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 10,
              fontWeight: "400",
            }}
            placeholder="Enter Salary"
            placeholderTextColor={"#757575"}
          />
        </View>
        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Address</Text>
          <TextInput
            value={address}
            onChangeText={(text) => setAddress(text)}
            style={{
              padding: 10,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 10,
              fontWeight: "400",
            }}
            placeholder="house no./street/colony/city/pincode/state"
            placeholderTextColor={"#757575"}
          />
        </View>
        <Pressable
          onPress={handleRegister}
          style={{
            backgroundColor: "#112233",
            padding: 10,
            marginTop: 20,
            justfityContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Add Employee
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default addDetails;

const styles = StyleSheet.create({});
