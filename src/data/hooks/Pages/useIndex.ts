// @ts-nocheck
import { useState, useEffect } from 'react'
import { Pets } from '../../@types/Pets'
// import { ApiService } from '../../services/apiServices'

import axios, { AxiosError } from 'axios'

export const useIndex = () => {
  const [petList, setPetList] = useState<Pets[]>([]),
    [selectedPet, SetSelectedPet] = useState<Pets | null>(null),
    [email, SetEmail] = useState(''),
    [amount, setAmount] = useState(''),
    [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('https://pets-backend-ladeia.herokuapp.com/api/pets')

      .then((res) => {
        setPetList(res.data.result)
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  useEffect(() => {
    if (selectedPet === null) {
      cleanForm()
    }
  }, [selectedPet])

  const adotar = () => {
    if (selectedPet !== null) {
      if (inputValidation()) {
        axios({
          method: 'post',
          url: 'https://pets-backend-ladeia.herokuapp.com/api/adopt',
          data: {
            pet_id: selectedPet._id,
            pet_name: selectedPet.petName,
            email,
            amount
          }
        })

          .then((response) => {
            SetSelectedPet(null)
            setMessage(response.data)
            cleanForm()
          })
          .catch((error: AxiosError) => {
            setMessage(error.res?.data.message)
          })
      } else {
        setMessage('Preencha os campos corretamente')
      }
    }
  }

  const inputValidation = () => {
    return email.length > 0 && amount.length > 0
  }

  const cleanForm = () => {
    SetEmail('')
    setAmount('')
  }

  return {
    petList,
    selectedPet,
    SetSelectedPet,
    email,
    SetEmail,
    amount,
    setAmount,
    message,
    setMessage,
    adotar
  }
}
