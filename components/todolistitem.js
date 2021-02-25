import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoListItem(props) {
  return (
    <>
      {props.List &&
        props.List.map((item, index) => {
          return (
            <>
              <TouchableOpacity onPress={() => props.Remove(item)}>
                <Text key={index} style={styles.list}>
                  {item}
                </Text>
              </TouchableOpacity>
            </>
          );
        })}
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    minWidth: 300,
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
});
