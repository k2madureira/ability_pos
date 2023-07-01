'use client';
import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { recoverUserInformation, signInRequest } from '@/services/auth';
import { redirect, useRouter } from 'next/navigation';
import { api } from '@/services/api';

type User = {
	id: string;
	email: string;
	name: string;
	profile:{
    id: string;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
  };
	instrument:{
    id: string;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
  }
};

type SignInRequest = {
	email: string;
	password: string;
};

type AuthContextType = {
	isAuthenticated: boolean;
	user: User | null;
	signIn: (data: SignInRequest) => Promise<void>;
	signOut: () => Promise<void>;
	verifyAuthenticated: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
	const router = useRouter();
	const [user, setUser] = useState<User | null>(null);
	const isAuthenticated = !!user;

	useEffect(() => {
		const { 'ability-token': token } = parseCookies();

		if (token) {
			recoverUserInformation().then((response) => {
				setUser(response);
			});
		}
	}, []);

	async function signIn(data: SignInRequest) {
		const { access_token: token, user } = await signInRequest(data);

		setCookie(undefined, 'ability-token', token, {
			maxAge: 60 * 60 * 48, //48 hour
		});

		api.defaults.headers['Authorization'] = `Bearer ${token}`;
		setUser(user);

		router.push('/home');
	}

	async function signOut() {
		destroyCookie(undefined,'ability-token')
	}

	async function verifyAuthenticated () {
		const { 'ability-token': token } = parseCookies();

		
		if (!token) {
			redirect('/signin')
		}
	}
	

	return (
		<AuthContext.Provider value={{ user, isAuthenticated,verifyAuthenticated, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}
