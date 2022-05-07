export class Vitals{
    temperature:  number ;
     pulse :  number ;
     respiratoryRate :  number ;
     bloodPressure :  number ;
     weight :  number ;
     spo2Level :  number ;
     patientId :  number ;
     requestedById :  number;

     constructor(temperature:  number ,
      pulse :  number ,
      respiratoryRate :  number ,
      bloodPressure :  number ,
      weight :  number ,
      spo2Level :  number ,
      patientId :  number ,
      requestedById :  number,){
        this.pulse = pulse;
        this.temperature = temperature;
        this.respiratoryRate = respiratoryRate;
        this.bloodPressure  = bloodPressure;
        this.weight = weight;
        this.spo2Level = spo2Level;
        this.patientId = patientId;
        this.requestedById = requestedById;
      }

}

