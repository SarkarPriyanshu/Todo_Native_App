import React from "react";
import { Text, TouchableOpacity, ScrollView, View } from "react-native";
import styles from "../style";

export default function TodoListItem(props) {
  return (
    <>
      <View style={styles.listContainer}>
        <ScrollView>
          {props.List &&
            props.List.map((item, index) => {
              return (
                <>
                  <TouchableOpacity onPress={() => props.Remove(index)}>
                    <Text key={index} style={styles.list}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                </>
              );
            })}
        </ScrollView>
      </View>
    </>
  );
}
