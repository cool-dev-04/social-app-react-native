import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxHeight: 50,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",

    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 16,
  },
  txtInput: {
    fontFamily: "Roboto",
    fontSize: 13,
    fontStyle: "normal",
  },
  btnComment: {
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    padding: 0,
    margin: 0,
  },
});
