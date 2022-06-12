import { useState, useEffect } from 'react'
import { Relatorio } from '../../../@type/Relatorio'
import { ApiSevice } from '../../../services/apiServices'
import axios from 'axios'

export function useRelatorio() {
  const [listaRelatorio, setListaRelatorio] = useState()

  useEffect(() => {
    axios.get('http://localhost:5000/api/adopt')
      .then((res) => {
        setListaRelatorio(res.data.result)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return {
    listaRelatorio
  }
}
