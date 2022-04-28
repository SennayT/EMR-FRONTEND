export class User{

  id: number;
  city: string;
  subCity: string;
  wereda: string;
  zone: string;
  kebele: string;
  street: string;
  houseNumber: string;


  constructor(id: number,
    city: string,
    subCity: string,
    wereda: string,
    zone: string,
    kebele: string,
    street: string,
    houseNumber: string){

      this.id = id;
      this.city = city;
      this.subCity = subCity;
      this.wereda = wereda;
      this.kebele = kebele;
      this.street = street;
      this.houseNumber = houseNumber;
      this.zone = zone;

  }

}
