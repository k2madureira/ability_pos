
import { UserResponse } from '@/hooks/dto/Iuser.dto';
import { useFetchInstruments } from '@/hooks/reactQuery/instruments/integrationApi';
import { useFetchStates } from '@/hooks/reactQuery/states/integrationApi';
import { useMutateUser } from '@/hooks/reactQuery/users/userMutate';
import { 
  Modal, 
  Button,
  Form,
  Input,
  Select,
} from 'antd';

interface IData {
  show: boolean, 
  close: any, 
  user: UserResponse | undefined
}
export function CreateStudentModal({ show, close, user }:IData) {
 
  const { mutate, isSuccess } = useMutateUser();
  const {data: dataStates, isLoading: isLoadingStates, isError:isErrorStates } = useFetchStates();
  const {data: dataInstruments, isLoading: isLoadingInstruments, isError: isErrorInstruments} = useFetchInstruments();

  async function handleCreate(formData: any) {
    console.log(formData);
    // mutate({...formData, type: 'student'});
	}

  return(
    <Modal 
    title="Cadastro estudante" 
    open={show} 
    onCancel={close}
    footer={[
      <Button type='primary' form="student-form" key="submit" htmlType="submit">
          Cadastrar
      </Button>
      ]}
    >
      <Form
        id='student-form'
        onFinish={handleCreate}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: 'small' }}
        size={'small'}
        style={{ maxWidth: 600 }}
      >
        <Form.Item 
        name="firstName"
        label="Nome"
        rules={[{ required: true, message: 'Por favor, informo o nome' }]}
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
          rules={[{ required: true, message: 'Por favor, preencha o campo password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirmação senha"
          name="passwordConfirmation"
          rules={[{ required: true, message: 'Por favor, preencha o campo de confirmação!' }]}
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
       
       
      </Form>
    </Modal>
  )
  
}

