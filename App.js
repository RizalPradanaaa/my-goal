import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import ListInput from "./components/ListInput";
export default function App() {
  const [goal, setGoal] = useState("");
  const [listgoals, setListgoals] = useState([]);
  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  }
  function addGoalList() {
    setListgoals((currentGoals) => [
      ...currentGoals,
      { text: goal, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.container}>
      <GoalInput inputhandler={goalInputHandler} addGoalList={addGoalList} />
      <ListInput data={listgoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  listgoalsContainer: {
    flex: 4,
    paddingTop: 20,
    flex: 5,
  },
  goal: {
    fontSize: 18,
    backgroundColor: "#5e0acc",
    padding: 8,
    borderRadius: 8,
    marginBottom: 10,
    color: "white",
  },
});
