import { NextPage } from 'next'
import { Title } from '../ui/components/Title/Title'
import { List } from '../ui/components/List/List'
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'
import { useIndex } from '../data/hooks/Pages/useIndex'

const Home: NextPage = () => {
  const {
    petList,
    selectedPet,
    SetSelectedPet,
    email,
    SetEmail,
    amount,
    setAmount,
    message,
    setMessage,
    adotar
  } = useIndex()

  return (
    <>
      <Title
        title=''
        subtitle={
          <span>Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      ></Title>
      <List
        pets={petList}
        onSelect={(pet) => SetSelectedPet(pet)}
      ></List>

      <Dialog
        open={selectedPet !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        // PaperProps={{ sx: { padding: '40px' } }}
        onClose={() => SetSelectedPet(null)}
      >
        <Grid
          container
          spacing={2}
        >
          <Grid
            item xs={12}
          >
            <TextField
              label={'E-mail'}
              type={'email'}
              fullWidth
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
            ></TextField>
          </Grid>
          <Grid
            item xs={12}
          >
            <TextField
              label={'Quantia por mês'}
              type={'number'}
              fullWidth
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
        <DialogActions
          sx={{ mt: 5 }}
        >
          <Button
            color={'secondary'}
            onClick={() => SetSelectedPet(null)}
          >
            Cancelar
          </Button>
          <Button
            variant={'contained'}
            onClick={() => adotar()}
          >
            Confirmar Adoção
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={message.length > 0}
        message={message}
        autoHideDuration={2500}
        onClose={() => setMessage('')}
      />
    </>
  )
}

export default Home
