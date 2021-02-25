import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputTodo from "./components/inputTodo";
import TodoListItem from "./components/todolistitem";

export default function App() {
  const [tasklist, setTaskist] = useState([]);
  const [task, setTask] = useState("");

  function onChangeHander(value) {
    setTask(value);
  }

  function handleButtonPress() {
    setTaskist((preTask) => [...preTask, task]);
  }

  function RemoveItem(value) {
    setTaskist((preTaskList) => {
      return preTaskList.filter((item) => item !== value);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Todo List</Text>
      {/* Todo container */}
      <InputTodo
        onChangeHander={onChangeHander}
        onButtonPressed={handleButtonPress}
      />
      <View>
        <TodoListItem Remove={RemoveItem} List={tasklist} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Title: {
    fontSize: 30,
  },
});
