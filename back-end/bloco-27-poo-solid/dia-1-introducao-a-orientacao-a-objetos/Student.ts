class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrade: number[];
  private _worksGrade: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrade = [];
    this._worksGrade = [];
  }

  

}