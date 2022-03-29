import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: Sizes.paddingTop,
        backgroundColor: Colors.warmWhite,
        justifyContent: "center",
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
submitBtn: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    borderRadius: 5,
    marginTop: 25,
    alignSelf: "center",
    
  },
  text: {
      textAlign: "center",
      marginBottom: 50,
      ...Fonts.style,
      color: Colors.primary

  },
inputCont : {
    paddingLeft: 20,
    paddingRight: 15
},
error: {
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    textAlign: "center",
    backgroundColor: "red",
    borderRadius: 20,
    ...Fonts.body3,
    color: "white",
    padding: 6
}
})