import React from "react";
import { Button, View } from "react-native";
import styles from "../style";

function ModelButton(props) {
  return (
    <>
      <View style={styles.modalbuttonview}>
        <Button title="Add Task" onPress={props.setModelVisibility} />
      </View>
    </>
  );
}

export default ModelButton;
