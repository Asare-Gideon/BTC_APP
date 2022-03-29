import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './app/store/store';
import useCachedResources from './hooks/useCachedResources';
import MainStack from './navigation/MainStack';
import Login from './screens/LoginScreen/Login';

export default function App() {
	const isLoadingComplete = useCachedResources();
	const [ isLogin, setIsLogin ] = useState(false);

	if (!isLoadingComplete) {
		return null;
	} else {
		if (isLogin) {
			return (
				<SafeAreaProvider>
					<NavigationContainer>
						<Provider store={store}>
							<MainStack />
						</Provider>
					</NavigationContainer>
				</SafeAreaProvider>
			);
		} else {
			return (
				<SafeAreaProvider>
					<Login setLogin={setIsLogin} />
				</SafeAreaProvider>
			);
		}
	}
}
