import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type HomeNavParams = {
	HomeScreen: undefined;
	AddScreen: undefined;
	DetailScreen: allDataType;
	Notification: undefined;
	Edit: {
		name: string;
		location: string;
		phoneNumber: string;
		bacenter: string;
		roomNumber: string;
		imgUrl: string;
		imgPublicId: string;
		_id: string;
	};
};
export type SecondHomeNavParams = {
	NewHomeScreen: undefined;
	NewAddScreen: undefined;
	NewDetailScreen: allDataType;
	Notification: undefined;
	NewEdit: {
		name: string;
		location: string;
		phoneNumber: string;
		bacenter: string;
		roomNumber: string;
		imgUrl: string;
		imgPublicId: string;
		_id: string;
	};
};
export type postStackNavParams = {
	MainScreen: undefined;
	SecondScreen: undefined;
};

export type postStackProp = NativeStackScreenProps<postStackNavParams>;

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
export interface NewcartsProp {
	image: string;
	name: string;
	text: string;
	roomNum: number;
	date: string;
	setAllData: any;
	allData: allDataType[];
	data: allDataType;
	navigation: NativeStackNavigationProp<SecondHomeNavParams>;
}
export type homeNavProp = NativeStackScreenProps<HomeNavParams>;
export type SecondhomeNavProp = NativeStackScreenProps<SecondHomeNavParams>;

export interface headerProp {
	title: string;
	navigation?: any;
	screenName?: string;
}
export interface searchHeaderProp {
	navigation?: NativeStackNavigationProp<HomeNavParams>;
	NewNavigation?: NativeStackNavigationProp<SecondHomeNavParams>;
	onChange: any;
}

export type PostStackProps = NativeStackScreenProps<HomeNavParams>;
export type SecondPostStackProps = NativeStackScreenProps<SecondHomeNavParams>;
