import { Button } from '@material-ui/core'
import * as C from './List.style'
import { Pets } from '../../../data/@types/Pets'
import { TextService } from '../../../data/services/TextService'

interface ListProps {
  pets: Pets[];
}

export const List = (props: ListProps) => {
  const maxlength = 200

  return (
    <C.ListStyled>
      {props.pets.map((pet, index) => (
        <C.ItemList key={pet.id}>
          <C.Photo src={pet.photo} alt='Foto do pet'></C.Photo>
          <C.Information>
            <C.Name>
              {pet.name}
            </C.Name>
            <C.Description>
              {TextService.textLimit(pet.history, maxlength)}
            </C.Description>
            <Button
              variant={'contained'}
              fullWidth
            >{pet.name}</Button>
          </C.Information>
        </C.ItemList>
      ))}
    </C.ListStyled>
  )
}
