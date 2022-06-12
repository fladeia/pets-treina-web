import { NextPage } from 'next'
import { useForm } from '../../data/hooks/Pages/pets/useForm'
import { Title } from '../../ui/components/Title/Title'
import { Paper, Grid, Button, TextField, Snackbar } from '@mui/material'

const Form: NextPage = () => {
  const {
    cadastrar,
    petName,
    history,
    urlPhoto,
    setPetName,
    setHistory,
    setUrlPhoto,
    message,
    setMessage
  } = useForm()

  console.log(message)

  return (
    <>
      <Title
        title={'Cadastro de Pets para adoção'}
        subtitle={'Preencha os dados do novo Pet'}
      ></Title>
      <Paper sx={{ maxWidth: 970, mx: 'auto', p: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              label={'Nome'}
              placeholder={'Digite o nome do pet'}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={history}
              onChange={(e) => setHistory(e.target.value)}
              label={'História do Pet'}
              multiline
              fullWidth
              rows={4}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={urlPhoto}
              onChange={(e) => setUrlPhoto(e.target.value)}
              label={'Foto'}
              placeholder={'Digite o endereço da imagem'}
              fullWidth
            ></TextField>
            <Button
              value={petName}
              variant={'contained'}
              color={'secondary'}
              sx={{ mt: 2 }}
              component={'a'}
              href={'https://imgur.com/upload'}
              target={'_blank'}
            >
              Enviar imagem
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Button
              onClick={cadastrar}
              variant={'contained'}
              fullWidth
              sx={{ maxWidth: { md: 200 }, mt: 4 }}
            >
              Cadastro Pet
            </Button>
          </Grid>
        </Grid>
      </Paper >
      {/* FIX SNACKBAR MESSAGE  */}
      <Snackbar
        open={message?.length > 0}
        autoHideDuration={2500}
        onClose={() => setMessage('')}
        message={message}
      ></Snackbar>
    </>
  )
}

export default Form

// FIX Error: Hydration failed because the initial UI does not match what was rendered on the server.