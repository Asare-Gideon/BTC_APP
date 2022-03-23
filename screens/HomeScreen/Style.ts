import { StyleSheet } from "react-native";
import { Colors, Sizes } from "../../constants/Layout";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: Sizes.paddingTop,
        width: Sizes.width,
        backgroundColor: Colors.warmWhite,
    },
addButton: {
			position: 'absolute',
					bottom: 20,
					right: 6,
					height: 70,
					width: 70,
					padding: 10,
					alignItems: 'center'

}
})