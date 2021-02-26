import React from "react";
import { View, TextInput, Button, Modal } from "react-native";
import styles from "../style";

export default function InputTodo(props) {
  return (
    <>
      <Modal style={styles.modal} visible={props.visible} animationType="fade">
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
      </Modal>
    </>
  );
}
