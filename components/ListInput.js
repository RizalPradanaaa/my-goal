import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

export default function ListInput({ data }) {
  return (
    <View style={styles.listgoalsContainer}>
      <FlatList
        data={data}
        renderItem={(itemData) => (
          <View key={itemData.id}>
            <Text style={styles.goal}>{itemData.item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
