import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/Layout";

export const styles = StyleSheet.create({
 main: {
    flex: 1,
    backgroundColor: Colors.primary,
    width: Sizes.width,
    paddingTop: Sizes.paddingTop,
  },
contentCont: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    backgroundColor: Colors.warmWhite,
    flex: 0.9
  },
  imgCont: {
      width: Sizes.width -30,
      height: 250,
      alignSelf: "center"
  },
  img: {
      width: "100%",
      height: "100%",
      borderRadius: 20
  },
  name: {
      ...Fonts.body2,
  },
  infoCont: {
      backgroundColor: Colors.white,
      marginTop: 10,
      padding: 4
  },
  flexCont: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 5,
      paddingTop: 10,
      paddingBottom: 10,
      borderBottomWidth: 0.2
  },
  text: {
      ...Fonts.body3,
      color: Colors.deepDarkGray
  }
})