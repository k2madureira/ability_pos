import { api } from './api';

interface ISignIn {
	request: {
		email: string;
		password: string;
	};
	response: {
		access_token: string;
		user: {
			id: string;
			email: string;
			name: string;
			profileId: string;
		};
	};
}

export async function signInRequest({
	email,
	password,
}: ISignIn['request']): Promise<ISignIn['response']> {
	const response = await api.post('/auth/sign-in', {
		email,
		password,
	});

	return response.data;
}

export async function recoverUserInformation() {
	return {
		id: 'ef0ff674-d65e-4b96-ac7b-0048bbcb61b7',
		email: 'lenilsonmadureira2@gmail.com',
		name: 'Lenilson Madureira ',
		profileId: 'e1f296b2-f273-11ed-a05b-0242ac120003',
	};
}
