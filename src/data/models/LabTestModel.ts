export class LabTest {
  name: string;
  normalRange: string;
  measuredIn: string;
  testCategory: string;
  investigationRequestId: number


  constructor(name: string,
    normalRange: string,
    measuredIn: string,
    testCategory: string,
    investigationRequestId: number
  ) {
    this.name = name;
    this.normalRange = normalRange;
    this.measuredIn = measuredIn;
    this.name = name;
    this.testCategory = testCategory;
    this.investigationRequestId = investigationRequestId;
  }
}
