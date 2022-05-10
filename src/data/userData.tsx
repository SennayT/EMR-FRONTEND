import { User } from './models/UserModel'

const user: User = {
  id: 1,
  name: 'Ruth Getachew',
  age: 23,
  gender: 'mayo in a chair',
  email: 'example@gmail.com',
  role: 'Nurse',
  phone: '+98765456',
  address: {
    id: 1,
    city: 'Addis Ababa',
    subCity: 'Arada',
    zone: 'Arada',
    street: 'Piassa',
    houseNumber: 'someNum',
    woreda: '10',
    kebelle: '10'
  }
}
export default user
