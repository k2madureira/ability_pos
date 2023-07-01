
import { 
  Modal, 
  Button,
  Form,
  Input,
  Divider,
  message
} from 'antd';
import { IRequest } from '@/hooks/dto/Igroup.dto';
import { UserResponse } from '@/hooks/dto/Iuser.dto';
import { useMutateGroup } from '@/hooks/reactQuery/groups/userMutate';

interface IData {
  show: boolean, 
  close: any, 
  user: UserResponse | undefined
}
export function CreateGroupModal({ show, close, user }:IData) {

  const { mutate, isSuccess, isError, error, reset } = useMutateGroup();
  const [messageApi, contextHolder] = message.useMessage();
  
  async function handleCreate(formData: IRequest) {
    mutate({...formData, users: [{ userId: user?.id as string, instructor: true }]});
	}

  if(isSuccess){
    messageApi.open({
      type: 'success',
      content: 'Grupo cadastrado com sucesso!',
    });
    reset();
    close();
    
  } else if(isError) {
    const err = error as any;
    let strErr = '';
    switch (err.response.data.statusCode) {
      case 409:
        strErr = 'Grupo já cadastrado!'
        break;
    
      default:
        strErr = 'Erro ao cadastrar grupo'
        break;
    }
    messageApi.open({
      type: 'error',
      content: strErr,
    });
  }


  return(
    <Modal 
    title="Cadastrar grupo musical" 
    open={show} 
    onCancel={close}
    destroyOnClose
    footer={[
      <Button 
        key="cancel" 
        onClick={close}
      >
            Cancelar
      </Button>,
      <Button 
        style={{ color: "var(--white)", backgroundColor: "var(--green-300)" }} 
        type='primary' 
        form="group-form" 
        key="submit" 
        htmlType="submit"
        >
          Cadastrar
      </Button>
      ]}
    >
      {contextHolder}
      <Form
        id='group-form'
        onFinish={handleCreate}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: 'small' }}
        size={'small'}
        style={{ maxWidth: 400 }}
      >
        <Divider />
        <Form.Item 
        name="name"
        label="Nome"
        rules={[{ required: true, message: 'Por favor, informe o nome!' }]}
        >
          <Input />
        </Form.Item>


        <Divider />
       
      </Form>
    </Modal>
  )
  
}

