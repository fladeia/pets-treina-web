// @ts-nocheck
import { Button } from '@material-ui/core'
import { Pets } from '../../../data/@types/Pets'
import { TextService } from '../../../data/services/TextService'
import * as C from './List.style'

interface ListProps {
  petList: Pets[];
  onSelect: (pet: Pets) => void;
}

export const List = (props: ListProps) => {
  const maxlength = 200

  return (
    <C.ListStyled>
      {props.petList.map((pet) => (
        <C.ItemList key={pet._id}>
          <C.Photo src={pet.urlPhoto} alt='Foto do pet'></C.Photo>
          <C.Information>
            <C.Name>
              {pet.petName}
            </C.Name>
            <C.Description>
              {TextService.textLimit(pet.history, maxlength)}
            </C.Description>
            <Button
              variant={'contained'}
              fullWidth
              onClick={() => props.onSelect(pet)}
            >{pet.petName}</Button>
          </C.Information>
        </C.ItemList>
      ))}
    </C.ListStyled>
  )
}
