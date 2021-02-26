import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import InputTodo from "./components/inputTodo";
import TodoListItem from "./components/todolistitem";
import ModelButton from "./components/modelbutton";
import styles from "./style";

export default function App() {
  const [tasklist, setTaskist] = useState([]);
  const [task, setTask] = useState("");
  const [visible, setVisible] = useState(false);

  function onChangeHander(value) {
    setTask(value);
  }

  function handleButtonPress() {
    setTaskist((preTask) => [...preTask, task]);
    setVisible(false);
  }

  function RemoveItem(value) {
    setTaskist((preTaskList) => {
      return preTaskList.filter((item, index) => index !== value);
    });
  }

  const setModelVisibility = () => {
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Todo List</Text>
      {/* Todo container */}
      <ModelButton setModelVisibility={setModelVisibility} />
      <InputTodo
        visible={visible}
        onChangeHander={onChangeHander}
        onButtonPressed={handleButtonPress}
      />
      <View>
        <TodoListItem Remove={RemoveItem} List={tasklist} />
      </View>
    </View>
  );
}
