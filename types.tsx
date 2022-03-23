import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { ImageSourcePropType } from 'react-native';

export type HomeNavParams = {
	HomeScreen: undefined;
	AddScreen: undefined;
	DetailScreen: allDataType;
	Notification: undefined;
};
export type allDataType = {
	name: string;
	roomNumber: string;
	bacenter: string;
	phoneNumber: string;
	imgUrl: string;
	imgPublicId: string;
	location: string;
	date: Date;
	imgAssetId: string;
	_id: string;
	__v: number;
};

export interface cartsProp {
	image: string;
	name: string;
	text: string;
	roomNum: number;
	date: string;
	setAllData: any;
	allData: allDataType[];
	data: allDataType;
	navigation: NativeStackNavigationProp<HomeNavParams>;
}
export type homeNavProp = NativeStackScreenProps<HomeNavParams>;

export interface headerProp {
	title: string;
	navigation?: any;
}
export interface searchHeaderProp {
	navigation: NativeStackNavigationProp<HomeNavParams>;
	onChange: any;
}

export type PostStackProps = NativeStackScreenProps<HomeNavParams>;
