// @ts-nocheck
import { Link, Box } from '@mui/material'
import { NextLink } from 'next/link'
import { Container, Logo, LinksContainer } from './HeaderAdminStyles'

export const HeaderAdmin = () => {
  return (
    <Container>
      <div>
        <Link component={NextLink} href={'/'}>
          <a>
            <Logo src={'/images/logo.svg'} alt="Logo"></Logo>
          </a>
        </Link>
        <LinksContainer>
          <Link component={NextLink} href={'/pets/form'}>
            <a>
              Cadastrar Pet
            </a>
          </Link>
          <Link
            component={NextLink}
            href={'/pets/relatorio'}
          >
            <a>
              Relatório {' '}
              <Box
                component={'span'}
                sx={{ display: { sm: 'initial', sx: 'none' } }}
              >
                de adoção Pet
              </Box>
            </a>
          </Link>
        </LinksContainer>
      </div>
    </Container>
  )
}
