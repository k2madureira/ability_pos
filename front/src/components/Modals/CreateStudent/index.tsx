
import { UserResponse } from '@/hooks/dto/Iuser.dto';
import { useFetchGroups } from '@/hooks/reactQuery/groups/integrationApi';
import { useFetchInstrument } from '@/hooks/reactQuery/instruments/integrationApi';
import { useFetchStates } from '@/hooks/reactQuery/states/integrationApi';
import { useMutateUser } from '@/hooks/reactQuery/users/userMutate';
import * as regex from '@/utils/handlers/regex';
import { 
  Modal, 
  Button,
  Form,
  Input,
  Select,
  Divider,
  message
} from 'antd';

interface IData {
  show: boolean;
  close: any;
  user: UserResponse | undefined;
  matchesMedia: boolean;
}
export function CreateStudentModal({ show, close, user, matchesMedia }:IData) {

  const { mutate, isSuccess, isError, error, reset } = useMutateUser();
  const [messageApi, contextHolder] = message.useMessage();
  const {data: dataStates, isLoading: isLoadingStates, isError:isErrorStates } = useFetchStates();
  const {data: dataInstruments, isLoading: isLoadingInstruments, isError: isErrorInstruments} = useFetchInstrument();
  const {  data: dataGroups, isLoading: isLoadingGroups, isError: isErrorGroups} = useFetchGroups(user);
 
  async function handleCreate(formData: any) {
    const groups = Array.isArray(formData.groups) ? 
    formData.groups.map((id:string) =>(
      {
        groupId: id,
        main: true, 
      }
    ))
    : [
        {
          groupId: formData.groups,
          main: true,
        }
      ]


    mutate({...formData, type: 'student', groups: Array.isArray(groups) ? groups: [groups]});
	}

  if(isSuccess){
    messageApi.open({
      type: 'success',
      content: 'Estudante cadastrado com sucesso!',
    });
    reset();
    close();
    
    
  } else if(isError) {
    const err = error as any;
    let strErr = '';
    switch (err.response.data.statusCode) {
      case 409:
        strErr = 'E-mail já esta em uso!'
        break;
    
      default:
        strErr = 'Erro ao cadastrar estudante'
        break;
    }
    messageApi.open({
      type: 'error',
      content: strErr,
    });
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
  return(
    <Modal 
    title="Cadastro estudante" 
    open={show} 
    onCancel={close}
    destroyOnClose
    footer={[
      <Button
        style={{ color: "var(--white)", backgroundColor: "var(--red-600)" }} 
        key="cancel" 
        onClick={close}
      >
            Cancelar
      </Button>,
      <Button 
        style={{ color: "var(--white)", backgroundColor: "var(--green-300)" }} 
        type='primary' 
        form="student-form" 
        key="submit" 
        htmlType="submit"
        >
          Cadastrar
      </Button>
      ]}
    >
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
        label="Nome"
        rules={[{ required: true, message: 'Por favor, informe o nome' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
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
          <Input />
        </Form.Item>

        <Form.Item
          label="Senha"
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
          <Input.Password/>
        </Form.Item>

        <Form.Item
          label="Confirmação senha"
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
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Estado"
          name="stateId"
          rules={[{ required: true, message: 'Por favor, selecione o estado!' }]}
          >
          <Select
            placeholder="Selecione o estado"
            style={{ width: 335 }}
            loading={isLoadingStates}
            options={!isErrorStates && dataStates ?dataStates?.map(instrument=> ({ label: instrument.name, value: instrument.id })) : []}
          />
        </Form.Item>

        <Form.Item
          label="Instrumento"
          name="instrumentId"
          rules={[{ required: true, message: 'Por favor, selecione o instrumento!' }]}
          >
          <Select
            placeholder="Selecione o instrumento"
            style={{ width: 335 }}
            loading={isLoadingInstruments}
            options={!isErrorInstruments && dataInstruments ?dataInstruments?.map(instrument=> ({ label: instrument.name, value: instrument.id })) : []}
          />
        </Form.Item>

        <Form.Item
          label="Grupos"
          name="groups"
          >
          <Select
            placeholder="Selecione grupos"
            style={{ width: 335 }}
            mode="multiple"
            loading={isLoadingGroups}
            options={!isErrorGroups && dataGroups ?dataGroups?.map(group=> ({ label: group.name, value: group.id })) : []}
          />
        </Form.Item>

        <Divider />
       
      </Form>
    </Modal>
  )
  
}

