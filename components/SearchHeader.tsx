import { AntDesign, Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { Colors, Sizes } from '../constants/Layout';
import { searchHeaderProp } from '../Types';

const SearchHeader = ({ navigation, onChange }: searchHeaderProp) => {
	return (
		<View style={styles.searchCont}>
			<View style={styles.searchInputCont}>
				<Input
					onChangeText={(e) => onChange(e)}
					style={styles.searchInput}
					inputContainerStyle={styles.inputCont}
					placeholder="Search"
					leftIcon={<AntDesign name="search1" size={22} />}
				/>
			</View>
			<TouchableOpacity onPress={() => navigation.navigate('Notification')} style={styles.bellCont}>
				<Feather name="bell" size={25} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	searchCont: {
		width: Sizes.width,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 5,
		paddingRight: 5,
		justifyContent: 'space-around',
		borderBottomWidth: 0.3,
		paddingBottom: 0,
		height: 65
	},
	searchInputCont: {
		flexDirection: 'row',
		padding: 8
	},
	searchInput: {
		paddingBottom: 0,
		borderBottomWidth: 0,
		borderRadius: Sizes.radius,
		paddingLeft: 7,
		paddingTop: 0
	},
	inputCont: {
		width: '90%',
		backgroundColor: Colors.white,
		alignItems: 'center',
		borderColor: Colors.white,
		paddingLeft: 10,
		borderRadius: Sizes.radius,
		marginTop: 5,
		paddingTop: 0,
		paddingBottom: 0,
		height: 40
	},
	bellCont: {
		marginTop: -20,
		paddingRight: 20
	}
});
export default SearchHeader;
