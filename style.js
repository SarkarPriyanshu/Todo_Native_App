import { StyleSheet } from "react-native";

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
  TodoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  modalbuttonview: {
    marginVertical: 20,
  },
});

export default styles;
