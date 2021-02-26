import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";

export default function TodoListItem(props) {
  return (
    <>
      <View style={styles.listContainer}>
        <ScrollView>
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
        </ScrollView>
      </View>
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
  listContainer: {
    maxHeight: 300,
  },
});
