'use client';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
	Container,
	Content,
	SideBar,
	Input,
	LogoImage,
	WomanImage,
} from './styles';
import Link from 'next/link';
import { AuthContext } from '@/contexts/AuthContext';
import { parseCookies } from 'nookies';
import { redirect } from 'next/navigation';

export interface ISignInProps {}
const SignIn: React.FC<ISignInProps> = () => {
	const { register, handleSubmit } = useForm();
	const { signIn } = useContext(AuthContext);

	useEffect(() => {
		const { 'ability-token': token } = parseCookies();
		
		if (token) {
			redirect('/home')
		}
		
	}, []);

	async function handleSignIn(data: any) {
		await signIn(data);
	}

	return (
		<Container>
			<SideBar>
				<header>
					<div className="Logo">
						<LogoImage
							className="ImgLogo"
							src="/images/sign-logo.png"
							width={99}
							height={56}
							alt="Logo"
						/>
					</div>
				</header>
				<main>
					<h3>
						Start your <br /> musical journey
					</h3>
					<p>Discover the best site for monitoring musical studies!</p>
				</main>
				<footer>
					<WomanImage
						className="ImgWoman"
						src="/images/sign-woman-background.png"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						alt="woman"
					/>
				</footer>
			</SideBar>
			<Content>
				<div className="ContentContainer">
					<div className="ContentTitle">
						<h1>Welcome</h1>
					</div>

					<main>
						<p>
							Don&apos;t have a account? <Link href="/signup">Register</Link>
						</p>
						<form onSubmit={handleSubmit(handleSignIn)}>
							<Input>
								<input
									{...register('email')}
									id="signEmail"
									name="email"
									required
								/>
								<label htmlFor="signEmail">E-mail</label>
							</Input>

							<Input>
								<input
									{...register('password')}
									type="password"
									id="signPassword"
									name="password"
									required
								/>
								<label htmlFor="signPassword">Password</label>
							</Input>

							<button type="submit">Sign In</button>
						</form>
						<div className="MainFooter">
							<a href="">Forgot password?</a>
							<div className="Line">
								<hr />
							</div>

							<div className="GoogleImg" />
						</div>
					</main>
					<footer>@2023 Ability, All Right Reserved</footer>
				</div>
			</Content>
		</Container>
	);
};

export default SignIn;
