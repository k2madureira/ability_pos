import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { 
  Autocomplete, 
  Button,  
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  FormControl, 
  IconButton, 
  InputAdornment, 
  InputLabel, 
  OutlinedInput, 
  TextField 
} from '@mui/material';

import { useFetchStates } from '@/hooks/reactQuery/states/integrationApi';
import { useMutateUser } from '@/hooks/reactQuery/users/userMutate';
import { useFetchInstruments } from '@/hooks/reactQuery/instruments/integrationApi';



export function CreateStudentModal({ show, close }: { show: boolean, close: any }) {
  const { register, handleSubmit } = useForm();
  const {data, isLoading} = useFetchStates();
  const {data: dataInstruments, isLoading: isLoadingInstruments} = useFetchInstruments();
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isSuccess } = useMutateUser();
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

 
  async function handleCreate(formData: any) {
    console.log(formData);

    const selectedState = data?.find(state => state.name === formData.selectedState);
    const selectedInstrument = dataInstruments?.find(instrument => instrument.name === formData.selectedInstrument);
    console.log({ selectedState })
    mutate({...formData, type: 'student', stateId: selectedState?.id, instrumentId: selectedInstrument?.id});
	}

  if (isSuccess) {
    close();
  }
 

  return (
  <Dialog
    fullScreen={false}
    open={show}
    onClose={close}
    aria-labelledby="responsive-dialog-title"
  >
    <DialogTitle id="responsive-dialog-title">
      {"Cadastro estudante"}
    </DialogTitle>
    <DialogContent>
      
        <form onSubmit={handleSubmit(handleCreate)}>
          <TextField {...register('firstName')} id="firstName" label="Nome" variant="outlined" fullWidth={true} color="secondary" size="small" margin="dense"/>
          <TextField {...register('email')} type='email' id="email" label="Email" variant="outlined" fullWidth={true} color="secondary" size="small" margin="dense"/>
          <FormControl  variant="outlined" fullWidth={true} color="secondary" size="small" margin="dense">
          <InputLabel htmlFor="password">Senha</InputLabel>
          <OutlinedInput
           {...register('password')}
            id="password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          </FormControl>

          <FormControl  variant="outlined" fullWidth={true} color="secondary" size="small" margin="dense">
          <InputLabel htmlFor="password-confirmation">Confirmação de senha</InputLabel>
          <OutlinedInput
          {...register('password-confirmation')}
            id="password-confirmation"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          </FormControl>
          <Autocomplete
            disablePortal
            id="select-state"
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.id}>
                  {option.label}
                </li>
              );
            }}
            options={!isLoading &&data ?data.map(state=> ({ label: state.name, id: state.id })) : []}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionLabel={(state) => state.label }
            sx={{ width: 300, marginTop: 1, marginBottom: 1 }}
            renderInput={(params) => <TextField {...params} {...register('selectedState')} label="Estado" />}
          />

          <Autocomplete
            disablePortal
            id="select-instrument"
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.id}>
                  {option.label}
                </li>
              );
            }}
            options={!isLoadingInstruments && dataInstruments ?dataInstruments?.map(instrument=> ({ label: instrument.name, id: instrument.id })) : []}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionLabel={(instrument) => instrument.label }
            sx={{ width: 300, marginTop: 1,  marginBottom: 1   }}
            renderInput={(params) => <TextField {...params} {...register('selectedInstrument')} label="Instrumento" />}
          />
          <button type="submit">Salvar</button>
        </form>
      
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={close}>
        Cancelar
      </Button>
      
    </DialogActions>
  </Dialog>
  )
}
