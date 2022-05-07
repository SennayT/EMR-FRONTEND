import { Address } from "./AddressModel";

export class HealthCenter {

  id: number;
  name: string;
  type: string;
  email: string;
  phone: string;
  address: Address;

  constructor(id: number, name: string, type: string, email: string, phone: string, address: Address) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }

}
