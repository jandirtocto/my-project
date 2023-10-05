import React from 'react';
import HomeScreen from './src/compont/HomeScreen';
import RegisterScreen from './src/compont/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterFirstNameScreen from './src/compont/form-register/RegisterFirstNameScreen';
import RegisterLastNameScreen from './src/compont/form-register/RegisterLastNameScreen';
import RegisterNumberScreen from './src/compont/form-register/RegisterNumberScreen';
import RegisterConfirmPassowordScreen from './src/compont/form-register/RegisterConfirmPasswordScreen';
import RegisterPasswordcreen from './src/compont/form-register/RegisterPasswordScreen';
import RegisterUserScreen from './src/compont/form-register/RegisterUserScreen';
import MyScreen from './src/compont/MyScreen';
import { ScreenRegisterUser } from './src/constants/routes';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name='HomeScreen'
					component={HomeScreen}
					options={{ title: 'HomeScreen' }}
				/>
				<Stack.Screen
					name='RegisterScreen'
					component={RegisterScreen}
					options={{ title: 'RegisterScreen' }}
				/>
				<Stack.Screen
					name='RegisterFirstNameScreen'
					component={RegisterFirstNameScreen}
				/>
				<Stack.Screen
					name='RegisterLastNameScreen'
					component={RegisterLastNameScreen}
				/>
				<Stack.Screen
					name='RegisterNumberScreen'
					component={RegisterNumberScreen}
				/>
				<Stack.Screen
					name='RegisterConfirmPasswordScreen'
					component={RegisterConfirmPassowordScreen}
				/>
				<Stack.Screen
					name='RegisterPasswordScreen'
					component={RegisterPasswordcreen}
				/>
				<Stack.Screen
					name={ScreenRegisterUser}
					component={RegisterUserScreen}
				/>
				<Stack.Screen name='MyScreen' component={MyScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
