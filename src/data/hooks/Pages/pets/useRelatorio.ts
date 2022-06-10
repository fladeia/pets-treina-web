import { useState, useEffect } from 'react'
import { Relatorio } from '../../../@type/Relatorio'
import { ApiSevice } from '../../../services/apiServices'

export function useRelatorio() {
  const [listaRelatorio, setListaRelatorio] = useState()

  useEffect(() => {
    ApiSevice.get('/adoption').then((res) => {
      setListaRelatorio(res.data)
    })
  }, [])

  return {
    listaRelatorio
  }
}