import { StyleSheet, TextInput, View, Button } from "react-native";
import React from "react";

export default function GoalInput({ inputhandler, addGoalList }) {
  return (
    <View style={styles.goalsContainer}>
      <TextInput
        placeholder="Enter your goals"
        onChangeText={inputhandler}
        style={styles.TextInput}
      ></TextInput>
      <Button title="Submit" onPress={addGoalList} />
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  TextInput: {
    borderWidth: 1,
    padding: 10,
    borderColor: "blue",
    width: "80%",
    borderRadius: 18,
    marginRight: 5,
    fontSize: 18,
  },
});
