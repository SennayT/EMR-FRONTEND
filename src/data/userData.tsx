import { User } from './models/UserModel'

const user: User = {
  id: 1,
  name: 'Ruth Getachew',
  dateOfBirth: 23,
  gender: 'mayo in a chair',
  email: 'example@gmail.com',
  role: 'Doctor',
  phone: '+98765456',
  address: {
    id: 1,
    city: 'Addis Ababa',
    subCity: 'Arada',
    zone: 'Arada',
    street: 'Piassa',
    houseNumber: 'someNum',
    wereda: '10',
    kebele: '10'
  }
}
export default user
