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
      <Table>
        <TableContainer component={Paper} sx={{ maxWidth: 830, mx: 'auto', p: { xs: 3, md: 5 } }}>
          <TableHead>
            <TableRow>
              <TableCell>Pet</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align={'right'}>Valor mensal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaRelatorio.map((relatorio) => (
              <TableRow key={relatorio.id}>
                <TableCell>{relatorio.pet.petName}</TableCell>
                <TableCell>{relatorio.email}</TableCell>
                <TableCell align={'right'}>{relatorio.valor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>

      </Table>
    </>
  )
}

export default Relatorio