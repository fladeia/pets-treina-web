import { useState } from 'react'
import { ApiSevice } from '../../../services/apiServices'
import { AxiosError } from 'axios'

export function useForm() {
  const [petName, setPetName] = useState('')
  const [history, setHistory] = useState('')
  const [photo, setPhoto] = useState('')
  const [message, setMessage] = useState('')

  function cadastrar() {
    if (validarFormulario()) {
      ApiSevice.post('/pets', {
        petName,
        history,
        photo
      })
        .then(() => {
          limpar()
          setMessage('Pet cadastrado com sucesso')
        })
        .catch((error: AxiosError) => {
          setMessage(error.response?.data.message)
        })
    } else {
      setMessage('Preencha todos os campos')
    }
  }

  function validarFormulario() {
    return petName.length > 2 && history.length > 20 && photo.length > 10
  }

  function limpar() {
    setPetName('')
    setHistory('')
    setPhoto('')
  }

  return {
    petName,
    history,
    photo,
    setPetName,
    setHistory,
    setPhoto,
    message,
    setMessage
  }
}