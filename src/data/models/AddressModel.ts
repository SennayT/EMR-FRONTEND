export class Address {

  id?: number;
  city: string;
  subCity: string;
  woreda: string;
  zone: string;
  kebelle: string;
  street: string;
  houseNumber: string;


  constructor(city: string,
    subCity: string,
    woreda: string,
    zone: string,
    kebelle: string,
    street: string,
    houseNumber: string, id?: number) {

    this.id = id;
    this.city = city;
    this.subCity = subCity;
    this.woreda = woreda;
    this.kebelle = kebelle;
    this.street = street;
    this.houseNumber = houseNumber;
    this.zone = zone;

  }

}
