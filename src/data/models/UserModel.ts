import { Address } from "./AddressModel";

export class User {

  id: number;
  name: string;
  dateOfBirth: number;
  gender: string;
  email: string;
  role: string;
  phone: string;
  address: Address;

  constructor(id: number, name: string, dateOfBirth: number, gender: string, email: string, role: string, phone: string, address: Address) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.email = email;
    this.role = role;
    this.phone = phone;
    this.address = address;
  }

}
