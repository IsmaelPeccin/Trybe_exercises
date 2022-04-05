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

  
  public get enrollment() : string {
    return this._enrollment;
  }

  
  public set enrollment(v : string) {
    this._enrollment = v;
  }

  
  public get name() : string {
    return this._name;
  }
  
  
  public set name(v : string) {
    if (v.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
  this._name = v;
  }

  
  public get examsGrade() : number[] {
    return this._examsGrade;
  }

  
  public set examsGrade(v : number[]) {
    if (v.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
  }
    this._examsGrade = v;
  }
  
  
  public get worksGrade() : number[] {
    return this._worksGrade;
  }
  
  
 
 public set worksGrade(v : number[]) {
   if (v.length > 2) {
     throw new Error('A pessoa estudante só pode possuir 2 notas de trabalho.');
  }
   this._worksGrade = v;
 }
}

