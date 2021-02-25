import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function InputTodo(props) {
  return (
    <>
      <View style={styles.TodoContainer}>
        <TextInput
          multiline
          style={styles.Input}
          placeholder="Add Task"
          onChangeText={(value) => {
            props.onChangeHander(value);
          }}
        />
        <View style={styles.Button}>
          <Button onPress={props.onButtonPressed} title="Add Task" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  TodoContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  Input: {
    padding: 8,
    borderWidth: 2,
    width: 300,
  },
  Button: {
    marginTop: 20,
  },
});
