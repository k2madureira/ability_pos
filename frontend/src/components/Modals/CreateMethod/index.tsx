
import { 
  Modal, 
  Button,
  Form,
  Input,
  Select,
  Divider,
  message
} from 'antd';
import { useFetchInstrument } from '@/hooks/reactQuery/instruments/integrationApi';
import { useMutateMethod } from '@/hooks/reactQuery/methods/userMutate';


interface IData {
  show: boolean;
  close: any;
  matchesMedia: boolean;
}
export function CreateMethodModal({ show, close,  matchesMedia }:IData) {

  const { mutate, isSuccess, isError, error, reset } = useMutateMethod();
  const [messageApi, contextHolder] = message.useMessage();
  const {data: dataInstruments, isLoading: isLoadingInstruments, isError: isErrorInstruments} = useFetchInstrument();
 
 
  async function handleCreate(formData: any) {
    mutate(formData);
	}

  if(isSuccess){
    messageApi.open({
      type: 'success',
      content: 'Método cadastrado com sucesso!',
    });
    reset();
    close();
    
    
  } else if(isError) {
    const err = error as any;
    let strErr = '';
    switch (err.response.data.statusCode) {
      case 409:
        strErr = 'Método já cadastrado!'
        break;
    
      default:
        strErr = 'Erro ao cadastrar método!'
        break;
    }
    messageApi.open({
      type: 'error',
      content: strErr,
    });
  }


  return(
    <Modal 
    title="Cadastrar Método" 
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
        name="title"
        label="Título"
        rules={[{ required: true, message: 'Por favor, informe o título' }]}
        >
          <Input />
        </Form.Item>

        <Divider />
        <Form.Item 
        name="description"
        label="Descrição"
        rules={[{ required: true, message: 'Por favor, informe a descrição' }]}
        >
          <Input />
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

        <Divider />
       
      </Form>
    </Modal>
  )
  
}

