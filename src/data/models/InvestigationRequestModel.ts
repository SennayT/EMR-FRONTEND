export class InvestigationRequest {

  note: string;
  vitalId: number;
  registeredById: number;

  constructor(note: string,
    vitalId: number,
    registeredById: number) {
    this.note = note;
    this.vitalId = vitalId;
    this.registeredById = registeredById;
  }
}
