import React, { useEffect, useState } from 'react';
import HomeScreen from './src/compont/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyScreen from './src/compont/MyScreen';
import {
	LogInScreen,
	ScreenDataPersonal,
	ScreenDrawerIndex,
	ScreenHome,
	ScreenMy,
	SignUpScreen,
} from './src/constants/routes';
import Tarde from './src/prueba/Tarde';
import DataPersonal from './src/compont/ScreenDataPersonal';
import DrawerIndex from './src/compont/DrawerIndex';
import ScreenLogIn from './src/compont/ScreenLogIn';
import { AuthContext } from './src/core/application/auth/AuthProvider';
import { auth } from './src/config/firebaseConfig';
import { CurrentUserContext } from './src/core/application/auth/CurrentUserProvider';
import ScreenSignUp from './src/compont/ScreenSignUp';
import useAuth from './src/config/hooks/useAuth';
import loader from './src/config/loader';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
	const { user } = useAuth();
	const dataLoaded = loader();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		dataLoaded
			.getLocation()
			.then((x) => {
				console.log('User location', x);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log('error', error);
				setIsLoading(false);
			});
	}, []);

	useEffect(() => {
		console.log('APP is ' + (isLoading ? 'Loading' : 'Ready'));
	}, [isLoading]);

	if (isLoading) return <Text style={{ fontSize: 80 }}>Loading</Text>;

	if (user) {
		return (
			<AuthContext.Provider value={auth}>
				<CurrentUserContext.Provider value={null}>
					<NavigationContainer>
						<Stack.Navigator>
							<Stack.Screen
								name={ScreenHome}
								component={HomeScreen}
								options={{ headerShown: false }}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</CurrentUserContext.Provider>
			</AuthContext.Provider>
		);
	} else {
		return (
			<AuthContext.Provider value={auth}>
				<CurrentUserContext.Provider value={null}>
					<NavigationContainer>
						<Stack.Navigator initialRouteName='MyScreen'>
							<Stack.Screen
								name={ScreenHome}
								component={HomeScreen}
								options={{ headerShown: false }}
								initialParams={{ language: dataLoaded.language }}
							/>
							<Stack.Screen
								name={ScreenDataPersonal}
								component={DataPersonal}
								options={{ title: 'RegisterScreen' }}
							/>
							<Stack.Screen
								name={LogInScreen}
								component={ScreenLogIn}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name={SignUpScreen}
								component={ScreenSignUp}
								options={{ headerShown: false }}
							/>
							<Stack.Screen name={ScreenMy} component={MyScreen} />
							<Stack.Screen name={ScreenDrawerIndex} component={DrawerIndex} />

							<Stack.Screen name='Tarde' component={Tarde} />
						</Stack.Navigator>
					</NavigationContainer>
				</CurrentUserContext.Provider>
			</AuthContext.Provider>
		);
	}
}
