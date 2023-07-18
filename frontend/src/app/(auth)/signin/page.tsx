'use client';
import React, { useContext, useEffect } from 'react';
import {  
  Button,
  Form,
  Input,
	message
} from 'antd';
import {
	Container,
	Content,
	SideBar,
	LogoImage,
	WomanImage,
} from './styles';
import Link from 'next/link';
import { AuthContext } from '@/contexts/AuthContext';
import { parseCookies } from 'nookies';
import { redirect } from 'next/navigation';
import { useMediaQuery } from '@/hooks/custom/useMediaQuery';

export interface ISignInProps {}
const SignIn: React.FC<ISignInProps> = () => {
	const matchesMedia = useMediaQuery('(min-width: 740px)');
	const matchesMedia1024 = useMediaQuery('(min-width: 1024px)');
	const [messageApi, contextHolder] = message.useMessage();
	const { signIn } = useContext(AuthContext);

	useEffect(() => {
		const { 'ability-token': token } = parseCookies();
		
		if (token) {
			redirect('/home')
		}
		
	}, []);

	async function handleSignIn(data: any) {
		try {
			await signIn(data);
		} catch (error) {
			if(error) {

				const err = error as any;
				let strErr = '';
				switch (err.response.data.statusCode) {
					case 403:
						strErr = 'E-mail ou password incorretos!'
						break;
				
					default:
						strErr = 'Erro ao realizar login. tente mais tarde!'
						break;
				}
				messageApi.open({
					type: 'error',
					content: strErr,
				});
			}
		}
		
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
						Comece a sua <br /> jornada musical
					</h3>
					<p>O melhor site para acompanhamento do estudo musical!</p>
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
				{contextHolder}
				<div className="ContentContainer">
					<div className="ContentTitle">
						<h1>Bem vindo (a)</h1>
					</div>

					<main>
						<p>
							Não possui uma conta? <Link href="/signup">Cadastre-se</Link>
						</p>
						<Form
							id='signin-form'
							className='signin-form'
							onFinish={handleSignIn}
							labelCol={{ span: 7}}
							wrapperCol={{ span: 14 }}
							layout="horizontal"
							initialValues={{ size: 'small' }}
							size={'small'}
							style={{ maxWidth: matchesMedia? 600: 400 }}
						>
							<Form.Item 
								name="email"
								rules={[
									{
										type: 'email',
										message: 'E-mail inválido!',
									},
									{
										required: true,
										message: 'Por favor informe o E-mail!',
									},
								]}
							>
								<Input placeholder="E-mail" 
									style={{
										width: matchesMedia1024? "20rem" :"21rem"
									}}
								/>
							</Form.Item>
							<Form.Item 
								name="password"
								rules={[
									{
										required: true,
										message: 'Por favor informe a senha!',
									},
								]}
							>
								<Input.Password placeholder="Password" style={{
										width: matchesMedia1024? "20rem" :"21rem"
									}}/>
							</Form.Item>
			
							<Button 
								style={{ 
									color: "var(--white)", 
									backgroundColor: "var(--fuchsia-950)",
									height: "2rem"
									// marginLeft: "6vw"
								}} 
								type='primary' 
								form="signin-form" 
								key="submit" 
								htmlType="submit"
								>
									Sign-in
							</Button>
						
						</Form>
						<div className="MainFooter">
							<Link href="/forgot">Esqueceu a senha?</Link>
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
