import { useState } from 'react'
import { Pets } from '../../@types/Pets'

export const useIndex = () => {
  const [petList, setPetList] = useState(
    [
      {
        id: 1,
        name: 'Dolby',
        history: 'lorm ipsum ipsum',
        photo: 'https://cdn.pixabay.com/photo/2017/08/07/12/41/paige-2603450_960_720.jpg',
      },
      {
        id: 2,
        name: 'Sound',
        history: 'lorm ipsum ipsum 2',
        photo: 'https://cdn.pixabay.com/photo/2014/07/13/12/58/cockatiel-392424_960_720.jpg',
      }
    ]
  ),
    [selectedPet, SetSelectedPet] = useState<Pets | null>(null),
    [email, SetEmail] = useState(''),
    [amount, setAmount] = useState(''),
    [message, setMessage] = useState('')

  const adotar = () => { }

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