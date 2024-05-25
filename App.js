import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
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
      <View style={styles.goalsContainer}>
        <TextInput
          placeholder="Enter your goals"
          onChangeText={goalInputHandler}
          style={styles.TextInput}
        ></TextInput>
        <Button title="Submit" onPress={addGoalList} />
      </View>
      <View style={styles.listgoalsContainer}>
        <ScrollView alwaysBounceHorizontal={true}>
          {listgoals.map((goal) => (
            <View key={goal.id}>
              <Text style={styles.goal}>{goal.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
