import { User } from './UserModel'
export class Patient {

  id: number;
  user: User;
  registeredBy: number;
  emergencyContactName: string;
  emergencyContactPhone: string


  constructor(
    id: number,
    user: User,
    registeredBy: number,
    emergencyContactName: string,
    emergencyContactPhone: string) {
    this.id = id;
    this.user = user
    this.registeredBy = registeredBy;
    this.emergencyContactName = emergencyContactName;
    this.emergencyContactPhone = emergencyContactPhone;
  }

}
