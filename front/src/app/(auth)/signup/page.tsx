'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import {
	Container,
	Content,
	SideBar,
	Input,
	LogoImage,
	WomanImage,
} from './styles';

export interface ISignInProps {}

const SignIn: React.FC<ISignInProps> = (props) => {
	const [phone, setPhone] = useState('');
	const handleInput = ({ target: { value } }: any) => setPhone(value);

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
							id="Logo"
						/>
					</div>
				</header>
				<main>
					<h3>Are you ready ?</h3>
					<p>
						Sign up now and enjoy great
						<br /> musical accompaniment
					</p>
				</main>
				<footer>
					<WomanImage
						className="ImgWoman"
						src="/images/sign-woman-background.png"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						alt="woman"
						id="Woman"
					/>
				</footer>
			</SideBar>
			<Content>
				<div className="ContentContainer">
					<div className="ContentTitle">
						<h1>Sign Up</h1>
					</div>

					<main>
						<p>
							Already have a account? <Link href="/signin">SignIn</Link>
						</p>
						<form action="">
							<Input>
								<input id="signEmail" name="email" required />
								<label htmlFor="signEmail">E-mail</label>
							</Input>

							<Input>
								<input id="signNickName" name="nickname" required />
								<label htmlFor="signNickName">Nickname</label>
							</Input>

							<Input>
								<input
									type="password"
									id="signPassword"
									name="password"
									required
								/>
								<label htmlFor="signPassword">Password</label>
							</Input>

							<Input>
								<input
									type="password"
									id="signPasswordConfirmation"
									name="passwordConfirmation"
									required
								/>
								<label htmlFor="signPasswordConfirmation">
									Password confirmation
								</label>
							</Input>

							<button type="submit">Register</button>
						</form>
						<div className="MainFooter">
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
