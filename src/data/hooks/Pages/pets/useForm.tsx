import { useState } from 'react'
// import { ApiService } from '../../../services/apiServices'
import axios, { AxiosError } from 'axios'

export function useForm() {
  const [petName, setPetName] = useState('')
  const [history, setHistory] = useState('')
  const [photo, setPhoto] = useState('')
  const [message, setMessage] = useState('')

  function cadastrar() {
    if (validarFormulario()) {
      // axios.post('http://localhost:5000/api/pets', {
      //   petName,
      //   history,
      //   photo
      // })
      axios({
        method: 'post',
        url: 'http://localhost:5000/api/pets',
        data: {
          petName,
          history,
          photo
        }
      })
        .then((response) => {
          console.log(response)
          limpar()
          setMessage('Pet cadastrado com sucesso')
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
    return petName.length > 2 && history.length > 5 && photo.length > 5
  }

  function limpar() {
    setPetName('')
    setHistory('')
    setPhoto('')
  }

  return {
    cadastrar,
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