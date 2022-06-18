// @ts-nocheck
import { NextPage } from 'next';
import { Title } from '../../ui/components/Title/Title';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { useRelatorio } from '../../data/hooks/Pages/pets/useRelatorio';

const Relatorio: NextPage = () => {
  const { listaRelatorio } = useRelatorio()

  return (
    <>
      <Title
        title={'Relatório de adoçoes'}
        subtitle={'Veja a lista de pets adotados'}
      ></Title>
      <TableContainer component={Paper} sx={{ maxWidth: 830, mx: 'auto', p: { xs: 3, md: 5 } }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pet</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align={'right'}>Valor mensal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaRelatorio?.map((relatorio) => (
              <TableRow key={relatorio.pet_id}>
                <TableCell>{relatorio.pet_name}</TableCell>
                <TableCell>{relatorio.email}</TableCell>
                <TableCell align={'right'}>{relatorio.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Relatorio

// FIX Error: Hydration failed because the initial UI does not match what was rendered on the server.
