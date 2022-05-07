export class Radiology {
  name: string;
  focalArea: string;
  report: string;
  images: [
    string
  ];
  comment: string;
  requestedById: number;
  investigationRequestId: number

  constructor(name: string,
    focalArea: string,
    report: string,
    images: [
      string
    ],
    comment: string,
    requestedById: number,
    investigationRequestId: number) {
    this.name = name;
    this.comment = comment;
    this.focalArea = focalArea;
    this.images = images;
    this.report = report
    this.requestedById = requestedById;
    this.investigationRequestId = investigationRequestId;
  }
}
