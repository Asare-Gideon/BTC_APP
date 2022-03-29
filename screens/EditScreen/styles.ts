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
    flex: 0.9,
    
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 10,
  },
  imageCont: {
    flexDirection: "row",
    flexWrap: 'wrap'
  },
  imageText: {
    marginTop: -10,
    marginBottom: 14,
    ...Fonts.body2,
    color: Colors.deepDarkGray,
  },
  addBtn: {
    width: 100,
    height: 100,
    marginLeft: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  alert: {
    ...Fonts.body3,
    marginTop: 5,
    color: Colors.darkgray,
  },
  closeBtn: {
    position: "absolute",
    right: 2,
    top: 3,
    zIndex: 22,
    backgroundColor: Colors.white,
  },
  submitBtn: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    borderRadius: 5,
    marginTop: 25,
    alignSelf: "center",
    
  },
});
