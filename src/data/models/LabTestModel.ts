export class LabTest {
  id: number;
  name: string;
  normalRange: string;
  measuredIn: string;
  testCategory: string;
  investigationRequestId: number


  constructor(name: string,
    normalRange: string,
    measuredIn: string,
    id: number,
    testCategory: string,
    investigationRequestId: number
  ) {
    this.id = id;
    this.name = name;
    this.normalRange = normalRange;
    this.measuredIn = measuredIn;
    this.name = name;
    this.testCategory = testCategory;
    this.investigationRequestId = investigationRequestId;
  }
}
