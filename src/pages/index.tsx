import { NextPage } from 'next'
import { Title } from '../ui/components/Title/Title'
import { List } from '../ui/components/List/List'

const Home: NextPage = () => {
  return (
    <>
      <Title
        title=''
        subtitle={
          <span>Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      ></Title>
      <List
        pets={[
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
        ]}
      ></List>
    </>
  )
}

export default Home
