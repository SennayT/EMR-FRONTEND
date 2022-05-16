export class InvestigationRequest {

  note: string;
  vitalId: number;
  registeredById: number;
  labTests: Array<number>;

  constructor(note: string,
    vitalId: number,
    labTests: Array<number>,
    registeredById: number) {
    this.note = note;
    this.vitalId = vitalId;
    this.registeredById = registeredById;
    this.labTests = labTests;
  }
}
