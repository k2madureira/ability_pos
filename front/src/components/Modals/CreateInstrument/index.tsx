
import { 
  Modal, 
  Button,
  Form,
  Input,
  Select,
  Divider,
  message
} from 'antd';
import { useFetchFamilies } from '@/hooks/reactQuery/families/integrationApi';
import { useMutateInstrument } from '@/hooks/reactQuery/instruments/userMutate';


interface IData {
  show: boolean;
  close: any;
  matchesMedia: boolean;
}
export function CreateInstrumentModal({ show, close,  matchesMedia }:IData) {

  const { mutate, isSuccess, isError, error, reset } = useMutateInstrument();
  const [messageApi, contextHolder] = message.useMessage();
  const {data: dataFamilies, isLoading: isLoadingFamilies, isError: isErrorFamilies} = useFetchFamilies();
 
 
  async function handleCreate(formData: any) {
    mutate(formData);
	}

  if(isSuccess){
    messageApi.open({
      type: 'success',
      content: 'Instrumento cadastrado com sucesso!',
    });
    reset();
    close();
    
    
  } else if(isError) {
    const err = error as any;
    let strErr = '';
    switch (err.response.data.statusCode) {
      case 409:
        strErr = 'Instrumento já cadastrado!'
        break;
    
      default:
        strErr = 'Erro ao cadastrar instrumento'
        break;
    }
    messageApi.open({
      type: 'error',
      content: strErr,
    });
  }


  return(
    <Modal 
    title="Cadastrar Instrumento" 
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
        name="name"
        label="Nome"
        rules={[{ required: true, message: 'Por favor, informe o nome' }]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          label="Naipe"
          name="familyId"
          rules={[{ required: true, message: 'Por favor, selecione o naipe!' }]}
          >
          <Select
            placeholder="Selecione o naipe"
            style={{ width: 335 }}
            loading={isLoadingFamilies}
            options={!isErrorFamilies && dataFamilies ?dataFamilies?.map(instrument=> ({ label: instrument.name, value: instrument.id })) : []}
          />
        </Form.Item>

        <Divider />
       
      </Form>
    </Modal>
  )
  
}

