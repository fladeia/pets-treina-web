// @ts-nocheck
import { useState, useEffect } from 'react'
// import { Relatorio } from '../../../@type/Relatorio'
// import { ApiSevice } from '../../../services/apiServices'

import axios from 'axios'

export function useRelatorio() {
  const [listaRelatorio, setListaRelatorio] = useState()

  useEffect(() => {
    axios.get('https://pets-backend-ladeia.herokuapp.com/api/adopt')

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
