import { Auth } from 'firebase/auth';
import { createContext, useContext } from 'react';

interface User {
	firstName: string;
	lastName: string;
}

export const CurrentUserContext = createContext<User | null>(null);

export function useCurrentUser() {
	const context = useContext(CurrentUserContext);
	if (context === undefined) {
		throw new Error('useCurrentUser must be used within a AuthProvider');
	}
	return context;
}
