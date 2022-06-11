import { useState, useEffect } from 'react'
import { Pets } from '../../@types/Pets'
import { ApiSevice } from '../../services/apiServices'
import { AxiosError } from 'axios'

export const useIndex = () => {
  const [petList, setPetList] = useState<Pets[]>([]),
    // const [petList, setPetList] = useState(
    //   [
    //     {
    //       id: 1,
    //       name: 'Dolby',
    //       history: 'lorm ipsum ipsum',
    //       photo: 'https://cdn.pixabay.com/photo/2017/08/07/12/41/paige-2603450_960_720.jpg',
    //     },
    //     {
    //       id: 2,
    //       name: 'Sound',
    //       history: 'lorm ipsum ipsum 2',
    //       photo: 'https://cdn.pixabay.com/photo/2014/07/13/12/58/cockatiel-392424_960_720.jpg',
    //     }
    //   ]
    // ),
    [selectedPet, SetSelectedPet] = useState<Pets | null>(null),
    [email, SetEmail] = useState(''),
    [amount, setAmount] = useState(''),
    [message, setMessage] = useState('')

  useEffect(() => {
    ApiSevice.get('/pets')
      .then((res) => {
        setPetList(res.data)
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
        ApiSevice.post('/adocoes', {
          pet_id: selectedPet.id,
          email,
          amount
        })
          .then(() => {
            selectedPet(null)
            setMessage('Pet adotado com sucesso')
            // cleanForm()
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
