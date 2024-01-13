import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	Pressable: {
		backgroundColor: '#FA8501',
		marginTop: 20,
		width: 300,
		height: 60,
		justifyContent: 'center',
		marginHorizontal: 'auto',
		borderRadius: 5,
	},
	text: {
		color: 'white',
		fontSize: 28,
		fontWeight: '600',
		textAlign: 'center',
	},
});

export default function ButtonMain({ text, route, style }: any) {
	return (
		<Pressable onPress={route}>
			<View style={[styles.Pressable, style]}>
				<Text style={styles.text}> {text}</Text>
			</View>
		</Pressable>
	);
}
