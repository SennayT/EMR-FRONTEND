import HealthCenter  from "./models/HealthCenterModel"

const healthCenter: HealthCenter = {
  id: 1,
  name: "Zewditu Hospital",
  type: "mayo in a chair",
  email: "example@gmail.com",
  phone:"+98765456",
  address: {
    id: 1,
    city: "Addis Ababa",
    subCity: "Arada",
    zone: "Arada",
    street: "Piassa",
    houseNumber: "someNum",
    woreda: "10",
    kebelle: "10"
  }
}
export default healthCenter;


/*


{
  "emergencyContactName": "Red",
  "emergencyContactPhone": "1234",
  "user": {
    "id": 4,
    "name": "ne ksent",
    "phone": "123",
    "age": 21,
    "email": "wsway@gmail.com",
    "isActive": true,
    "isResearcher": false,
    "isAdmin": false,
    "address": {
      "id": 6,
      "city": "Addis Ababa",
      "subCity": "Arada",
      "zone": "Arada",
      "woreda": "10",
      "kebelle": "10",
      "street": "Piassa",
      "houseNo": "someNum"
    },
    "role": {
      "id": 2,
      "name": "Patient"
    },
    "healthCenter": {
      "id": 1,
      "name": "Bethel Hospital",
      "email": "wsennay@gmail.com",
      "type": "type 1",
      "address": {
        "id": 1,
        "city": "addis",
        "subCity": "kolfe",
        "zone": "o",
        "woreda": "07",
        "kebelle": "none",
        "street": "1234",
        "houseNo": "1234"
      }
    }
  },
  "registeredBy": {
    "id": 1,
    "name": "Admin",
    "phone": "123",
    "age": 1,
    "email": "abcd@abc.com",
    "isActive": true,
    "isResearcher": false,
    "isAdmin": false,
    "address": {
      "id": 2,
      "city": "addis",
      "subCity": "kolfe",
      "zone": "o",
      "woreda": "07",
      "kebelle": "none",
      "street": "1234",
      "houseNo": "1234"
    },
    "role": {
      "id": 7,
      "name": "Hospital Admin"
    }
  },
  "id": 4
}



*/
