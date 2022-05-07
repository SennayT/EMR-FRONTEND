
    export class LabResult{
      name  :   string;
      type  :   string;
      comment  :   string;
      isAbnormal : boolean;
      result : string;
      filledById  :   number;
      investigationRequestId  : number


      constructor(name  :   string,
        type  :   string,
        comment  :   string,
        result : string,
        isAbnormal : boolean,
        filledById  :   number,
        investigationRequestId  : number
        ){
          this.name = name;
          this.type =  type;
          this.comment = comment;
          this.name = name;
          this.isAbnormal = isAbnormal;
          this.result = result;
          this.filledById = filledById;
          this.investigationRequestId  = investigationRequestId;
        }
  }
