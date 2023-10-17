import React from 'react';
import HomeScreen from './src/compont/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterFirstNameScreen from './src/compont/form-register/RegisterFirstNameScreen';
import RegisterLastNameScreen from './src/compont/form-register/RegisterLastNameScreen';
import RegisterNumberScreen from './src/compont/form-register/RegisterNumberScreen';
import RegisterConfirmPassowordScreen from './src/compont/form-register/RegisterConfirmPasswordScreen';
import RegisterPasswordcreen from './src/compont/form-register/RegisterPasswordScreen';
import RegisterUserScreen from './src/compont/form-register/RegisterUserScreen';
import MyScreen from './src/compont/MyScreen';
import {
	LogInScreen,
	ScreenDataPersonal,
	ScreenDrawerIndex,
	ScreenHome,
	ScreenMy,
	ScreenRegisterConfirmPassword,
	ScreenRegisterFirstName,
	ScreenRegisterLastName,
	ScreenRegisterNumber,
	ScreenRegisterPassword,
	ScreenRegisterUser,
} from './src/constants/routes';
import Mañana from './src/prueba/Mañana';
import Tarde from './src/prueba/Tarde';
import DataPersonal from './src/compont/ScreenDataPersonal';
import DrawerIndex from './src/compont/DrawerIndex';
import ScreenLogIn from './src/compont/ScreenLogIn';
import { AuthContext } from './src/core/application/auth/AuthProvider';
import { auth } from './src/config/firebaseConfig';
import { CurrentUserContext } from './src/core/application/auth/CurrentUserProvider';

const Stack = createNativeStackNavigator();

export default function App() {
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
						<Stack.Screen
							name={ScreenDataPersonal}
							component={DataPersonal}
							options={{ title: 'RegisterScreen' }}
						/>
						<Stack.Screen
							name={ScreenRegisterFirstName}
							component={RegisterFirstNameScreen}
						/>
						<Stack.Screen
							name={ScreenRegisterLastName}
							component={RegisterLastNameScreen}
						/>
						<Stack.Screen
							name={ScreenRegisterNumber}
							component={RegisterNumberScreen}
						/>
						<Stack.Screen
							name={ScreenRegisterConfirmPassword}
							component={RegisterConfirmPassowordScreen}
						/>
						<Stack.Screen
							name={ScreenRegisterPassword}
							component={RegisterPasswordcreen}
						/>
						<Stack.Screen
							name={ScreenRegisterUser}
							component={RegisterUserScreen}
						/>
						<Stack.Screen
							name={LogInScreen}
							component={ScreenLogIn}
							options={{ headerShown: false }}
						/>
						<Stack.Screen name={ScreenMy} component={MyScreen} />
						<Stack.Screen name={ScreenDrawerIndex} component={DrawerIndex} />
						<Stack.Screen name='Mañana' component={Mañana} />
						<Stack.Screen name='Tarde' component={Tarde} />
					</Stack.Navigator>
				</NavigationContainer>
			</CurrentUserContext.Provider>
		</AuthContext.Provider>
	);
}
