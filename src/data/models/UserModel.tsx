export class User{

  id: number;
  name: string;
  dateOfBirth: number;
  gender: string;
  email: string;
  role: string;

  constructor(id:number, name:string, dateOfBirth:number, gender: string, email: string, role: string ){
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.email = email;
    this.role = role;
  }

}
