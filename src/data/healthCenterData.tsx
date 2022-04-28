import { HealthCenter } from "./models/HealthCenterModel";

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
    wereda: "10",
    kebele: "10"
  }
}
export default healthCenter;
