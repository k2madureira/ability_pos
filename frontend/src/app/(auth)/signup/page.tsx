'use client';
import React from 'react';
import Link from 'next/link';

import {  
  Button,
  Form,
  Input,
  Select,
  Divider,
  message
} from 'antd';

import { useFetchStates } from '@/hooks/reactQuery/states/integrationApi';
import { useMutateUserSignUp } from '@/hooks/reactQuery/users/userMutate';
import * as regex from '@/utils/handlers/regex';

import {
	Container,
	Content,
	SideBar,
	LogoImage,
	WomanImage,
} from './styles';
import { useMediaQuery } from '@/hooks/custom/useMediaQuery';
import { redirect } from 'next/navigation';

export interface ISignInProps {}

const SignIn: React.FC<ISignInProps> = (props) => {
	const matchesMedia = useMediaQuery('(min-width: 740px)');
	const matchesMedia1024 = useMediaQuery('(min-width: 1024px)');
	const { mutate, isSuccess, isError, error, reset } = useMutateUserSignUp();
  const [messageApi, contextHolder] = message.useMessage();
  const {data: dataStates, isLoading: isLoadingStates, isError:isErrorStates } = useFetchStates();
  
	async function handleCreate(formData: any) {
    mutate(formData);
	}


  async function checkPassword(type:regex.checkRegex, value: string) {
    return new Promise((resolve, reject) => {
      if (regex[type].test(value)) {
        resolve('');
      } else {
        reject(regex.regexErrors[type])
      }
    })
  }

	if(isSuccess){
    messageApi.open({
      type: 'success',
      content: 'Cadastro realizado com sucesso!',
    });
    reset();
		redirect('/signin');
  
  } else if(isError) {
    const err = error as any;
    let strErr = '';
    switch (err.response.data.statusCode) {
      case 409:
        strErr = 'E-mail já esta em uso!'
        break;
    
      default:
        strErr = 'Erro ao cadastrar, tente novamente mais tarde!'
        break;
    }
    messageApi.open({
      type: 'error',
      content: strErr,
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
					<h3>Você esta pronto(a) ?</h3>
					<p>
						Cadastre-se e aproveite dessa
						<br /> incrível jornada musical
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
						<h1>Faça parte</h1>
					</div>

					<main>
						<p>
							Já possui uma conta? <Link href="/signin">SignIn</Link>
						</p>
						
						{contextHolder}
						<Form
							id='student-form'
							onFinish={handleCreate}
							labelCol={{ span: 7}}
							wrapperCol={{ span: 14 }}
							layout="horizontal"
							initialValues={{ size: 'small' }}
							size={'small'}
							style={{ maxWidth: matchesMedia? 500: 400 }}
						>
							<Divider />
							<Form.Item 
							name="firstName"
							rules={[{ required: true, message: 'Por favor, informe o nome' }]}
							>
								<Input placeholder='Nome'style={{
										width: matchesMedia1024? "25rem" :"22rem"
									}}/>
							</Form.Item>

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

							<Form.Item
								name="password"
								hasFeedback
								rules={[
									{ required: true, message: 'Por favor, preencha o campo password!' },
									{
										validator(_, value) {
											return checkPassword('CHECK_NUMBER',value)
										}
									},
									{
										validator(_, value) {
											return checkPassword('CHECK_UPPER',value)
										}
									},
									{
										validator(_, value) {
											return checkPassword('CHECK_LOWER',value)
										}
									},
									{
										validator(_, value) {
											return checkPassword('CHECK_SPECIAL',value)
										}
									},
									{
										validator(_, value) {
											return checkPassword('CHECK_COUNT',value)
										}
									},
									
								
								]}
							>
								<Input.Password placeholder='Senha' style={{
										width: matchesMedia1024? "25rem" :"22rem"
									}}/>
							</Form.Item>

							<Form.Item
								name="passwordConfirmation"
								hasFeedback
								dependencies={['password']}
								rules={[
									{ required: true, message: 'Por favor, preencha o campo de confirmação!' },
									{
										validator(_, value) {
											return checkPassword('CHECK_NUMBER',value)
										}
									},
									{
										validator(_, value) {
											return checkPassword('CHECK_UPPER',value)
										}
									},
									{
										validator(_, value) {
											return checkPassword('CHECK_LOWER',value)
										}
									},
									{
										validator(_, value) {
											return checkPassword('CHECK_SPECIAL',value)
										}
									},
									{
										validator(_, value) {
											return checkPassword('CHECK_COUNT',value)
										}
									},
									({ getFieldValue }) => ({
										validator(_, value) {
											if (!value || getFieldValue('password') === value) {
												return Promise.resolve();
											}
											return Promise.reject(new Error('As senhas devem ser iguais!'));
										},
									}),
								]}
							>
								<Input.Password placeholder='Confirmação de senha' style={{
										width: matchesMedia1024? "25rem" :"22rem"
									}}/>
							</Form.Item>

							<Form.Item
								name="stateId"
								rules={[{ required: true, message: 'Por favor, selecione o estado!' }]}
								>
								<Select
									placeholder="Selecione o estado"
									
									loading={isLoadingStates}
									options={!isErrorStates && dataStates ?dataStates?.map(instrument=> ({ label: instrument.name, value: instrument.id })) : []}
									style={{
										width: matchesMedia1024? "25rem" :"22rem"
									}}
									/>
							</Form.Item>

							<Divider />

							<Button 
								style={{ 
									color: "var(--white)", 
									backgroundColor: "var(--fuchsia-950)",
								}} 
								type='primary' 
								form="student-form" 
								key="submit" 
								htmlType="submit"
								>
									Registrar
							</Button>
						
						</Form>


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
