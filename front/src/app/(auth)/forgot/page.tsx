'use client';
import React from 'react';
import Link from 'next/link';

import {  
  Button,
  Form,
  Input,
  Divider,
  message
} from 'antd';

import { useMutateUserforgot } from '@/hooks/reactQuery/auth/authMutate';

import {
	Container,
	Content,
	SideBar,
	LogoImage,
	WomanImage,
} from './styles';
import { useMediaQuery } from '@/hooks/custom/useMediaQuery';
import { redirect } from 'next/navigation';


export interface IForgotProps {}

const Forgot: React.FC<IForgotProps> = (props) => {
	const matchesMedia = useMediaQuery('(min-width: 740px)');
	const matchesMedia1024 = useMediaQuery('(min-width: 1024px)');
	const { mutate, isSuccess, isError, isLoading, reset } = useMutateUserforgot();
  const [messageApi, contextHolder] = message.useMessage();

  
	async function handleCreate(formData: any) {
    mutate(formData);
	}


	if(isSuccess){
    messageApi.open({
      type: 'success',
      content: 'E-mail de recuperação enviado com sucesso!',
    });
    // reset();
		// redirect('/signin');
  
  } else if(isError) {
    messageApi.open({
      type: 'error',
      content: 'Erro ao enviar email, tente novamente mais tarde!',
    });
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
							id="Logo"
						/>
					</div>
				</header>
				<main>
					<h3>Vamos ajudar você.</h3>
					<p>
						Esqueceu a sua senha certo?
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
						{isLoading && <>
							<h1>Enviando email...</h1>
						</>}
						{(!isLoading && !isSuccess) && <>
							<h1>E agora?</h1>
						</>}
						{isSuccess && <>
							<h1>Email enviado</h1>
						</>}
					</div>

					<main>
					
						{contextHolder}
						{isLoading && <></>}
						{(!isLoading && isSuccess) && <>
							<Button 
								style={{ 
									color: "var(--white)", 
									backgroundColor: "var(--fuchsia-950)",
								}} 
								type='primary' 
								key="button" 
								htmlType="button"
								>
									<Link href="/signin">SignIn</Link>
							</Button>
						</>}
						{(!isLoading && !isSuccess) && <>
							<p>
								Lembrou da senha? <Link href="/signin">SignIn</Link>
							</p>
						 <br />
						 <p> Informe seu email <br /> para receber uma senha temporária.</p>
							<Form
							id='forgot-form'
							onFinish={handleCreate}
							labelCol={{ span: 7}}
							wrapperCol={{ span: 14 }}
							layout="horizontal"
							initialValues={{ size: 'small' }}
							size={'small'}
							style={{ maxWidth: matchesMedia? 500: 400 }}
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
								<Input placeholder='E-mail' style={{
										width: matchesMedia1024? "25rem" :"22rem"
									}}/>
							</Form.Item>
							<Button 
								style={{ 
									color: "var(--white)", 
									backgroundColor: "var(--fuchsia-950)",
								}} 
								type='primary' 
								form="forgot-form" 
								key="submit" 
								htmlType="submit"
								>
									Enviar
							</Button>
							
						</Form>
						
						</>}
						


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

export default Forgot;
