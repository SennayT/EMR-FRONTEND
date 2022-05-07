import { Address } from "./AddressModel";

export class User {

  id: number;
  name: string;
  age: number;
  gender: string;
  email: string;
  role: string;
  phone: string;
  address: Address;
  isActive: boolean;
  isResearcher: boolean;
  isAdmin: boolean;
  healthCeterId: number;


  constructor(id: number, name: string, age: number, gender: string, email: string, role: string, phone: string, address: Address, isActive: boolean, isResearcher: boolean, isAdmin: boolean, healthCeterId: number) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.role = role;
    this.phone = phone;
    this.address = address;
    this.isActive = isActive;
    this.isResearcher = isResearcher;
    this.isAdmin = isAdmin;
    this.healthCeterId = healthCeterId;
  }

}

