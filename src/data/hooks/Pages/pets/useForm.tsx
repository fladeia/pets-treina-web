// @ts-nocheck
import { useState } from 'react'
// import { ApiService } from '../../../services/apiServices'

import axios from 'axios'

export function useForm() {
  const [petName, setPetName] = useState('')
  const [history, setHistory] = useState('')
  const [urlPhoto, setUrlPhoto] = useState('')
  const [message, setMessage] = useState('')

  function cadastrar() {
    if (validarFormulario()) {
      // axios.post('https://pets-backend-ladeia.herokuapp.com/api/pets', {
      //   petName,
      //   history,
      //   urlPhoto
      // })
      axios({
        method: 'post',
        url: 'https://pets-backend-ladeia.herokuapp.com/api/pets',
        data: {
          petName,
          history,
          urlPhoto
        }
      })

        .then((response) => {
          // console.log(response)
          limpar()
          setMessage(response.data)
        })

        .catch((error) => {
          // setMessage(error.response?.data.message)
          console.log(error)
        })
    } else {
      setMessage('Preencha todos os campos')
    }
  }

  function validarFormulario() {
    return petName.length > 2 && history.length > 5 && urlPhoto.length > 5
  }

  function limpar() {
    setPetName('')
    setHistory('')
    setUrlPhoto('')
  }

  return {
    cadastrar,
    petName,
    history,
    urlPhoto,
    setPetName,
    setHistory,
    setUrlPhoto,
    message,
    setMessage
  }
}