class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day:number, month: number, year:number) {
    const dateStr = `${year}-${month}-${day}`;

    // verifica se a data é válida
    if (new Date(dateStr).getDate() !== day) {
        day = 1;
        month = 1;
        year = 1900;
    }

    this._day = day;
    this._month = month;
    this._year = year;
  }

  
  public get day() : number {
    return this._day;
  }
  
  
  public set day(v : number) {
    this._day = v;
  }

  
  public get month() : number {
    return this._month;
  }

  
  public set month(v : number) {
    this._month = v;
  }

  
  public get year() : number {
    return this._year;
  }

  
  public set year(v : number) {
    this._year = v;
  }

  getMonth(): string {
    const months = ["January","February","March","April","May","June","July",
  "August","September","October","November","December"];

  return months[this.month - 1];
  }

  isLeapYear(): boolean {
    return this._year % 4 === 0;
  }

  compare(date: Data): number {

    const currentDateStr = `${this.year}-${this.month}-${this.day}`;

    const dateStr = `${date.year}-${date.month}-${date.day}`;

    if (new Date(currentDateStr) > new Date(dateStr)) return 1;
    if (new Date(currentDateStr) < new Date(dateStr)) return -1;

    return 0;
}

format(formatting: string): string {

    const conditions: boolean[] = [
        (!formatting.match(/a{2,4}/g)), // verifica se possui o ano na formatação
        (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)), // verifica se tem o mês na formatação
        (!formatting.match(/d{2}/g)) // verifica se tem o dia na formatação
    ];

    if (conditions.every(cond => cond)) {
        throw new Error(`O formato passado é inválido: ${formatting}`);
    }

    const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
    const month = this.month > 9 ? this.month.toString() : `0${this.month.toString()}`;
    const year = this.year.toString();

    const dateFormatting = formatting
        .replace('dd', day)
        .replace('mm', month)
        .replace('M', this.getMonth())
        .replace('aaaa', year)
        .replace('aa', year.substr(-2));

    return dateFormatting;
  }

  private validateDate(day: number, month: number, year: number): boolean {
    const dateStr = `${year}-${month}-${day}`;

    if (new Date(dateStr).getDate() !== day)
        return false;
    return true
}
}
