'use client';
import React, { useContext, useEffect } from 'react';
import { parseCookies } from 'nookies';
import { Container, Content, SideBar, LogoImage, WomanImage } from './styles';
import { AuthContext } from '@/contexts/AuthContext';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { api } from '@/services/api';

export interface IDashboardProps {}
const Dashboard: React.FC<IDashboardProps> = () => {
	const { user } = useContext(AuthContext);

	useEffect(() => {
		api.get('/users');
	}, []);

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
					<p>{user?.name}</p>
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
						<h1>Dashboard</h1>
					</div>

					<main>
						<h1>Logout</h1>
						<Link href="/signin">SIGNIN</Link>
					</main>
					<footer>@2023 Ability, All Right Reserved</footer>
				</div>
			</Content>
		</Container>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	console.log(ctx);
	const { ['ability-token']: token } = parseCookies(ctx);
	console.log(ctx.req.cookies);
	if (!token) {
		return {
			redirect: {
				destination: '/signin',
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
};

export default Dashboard;
