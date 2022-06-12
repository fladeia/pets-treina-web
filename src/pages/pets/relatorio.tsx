import { NextPage } from 'next';
import { Title } from '../../ui/components/Title/Title';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { useRelatorio } from '../../data/hooks/Pages/pets/useRelatorio';
import { useEffect } from 'react'

const Relatorio: NextPage = () => {
  const { listaRelatorio } = useRelatorio()

  console.log(listaRelatorio)

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
            {listaRelatorio?.map((relatorio) => (
              <TableRow key={relatorio.pet_id}>
                <TableCell>{relatorio.pet_id}</TableCell>
                <TableCell>{relatorio.email}</TableCell>
                <TableCell align={'right'}>{relatorio.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>

      </Table>
    </>
  )
}

export default Relatorio
