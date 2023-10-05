import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function Header({ dirigir, text, simbol }: any) {
	return (
		<View
			style={{
				flexDirection: 'row',
				height: 50,
				borderRadius: 3,
				borderWidth: 2.5,
				borderColor: '#F9F9F9',
			}}>
			<Text
				style={{
					width: '80%',
					fontSize: 25,
					fontWeight: '500',
					letterSpacing: 2,
					textAlign: 'center',
					paddingVertical: 7,
				}}>
				{text}
			</Text>
			<Pressable
				style={{ backgroundColor: 'black', width: '20%' }}
				onPress={dirigir}>
				<Text
					style={{
						fontSize: 20,
						color: 'white',
						textAlign: 'center',
						paddingVertical: 8,
					}}>
					{simbol}
				</Text>
			</Pressable>
		</View>
	);
}
