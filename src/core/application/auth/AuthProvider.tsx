import { Auth } from 'firebase/auth';
import { createContext, useContext } from 'react';
import { auth } from '../../../config/firebaseConfig';

export const AuthContext = createContext<Auth>(auth);

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within a AuthProvider');
	}
	return context;
}
