import { Injectable } from '@angular/core';
import { ShowStudent } from '../models/showStudent';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private readonly PAY = 50;
  constructor() { }

  private generateArray(
    arrLength: number,
    student: ShowStudent): Array<number> {
      const arr: Array<number> = new Array();
      for (let i = 0; i < arrLength; i++) {
        if (student.studentType === 'contract') {
            if (student.payArray >= this.PAY) {
              arr.push(this.PAY);
              student.payArray -= this.PAY;
            } else if (student.payArray < this.PAY) {
              arr.push(student.payArray);
              student.payArray = 0;
            } else if (student.payArray === 0) {
              arr.push(0);
            }
        } else {
          arr.push(0);
        }
      }
      return arr;
  }

  private customArray(student: ShowStudent, noPayedMonth: number): Array<number> {
    let arr: Array<number> = new Array();
    let arrLength  = 9;

    arrLength = arrLength - noPayedMonth;
    arr = this.generateArray(arrLength, student);

    for (let i = 0; i < noPayedMonth; i++) {
      arr.unshift(null);
    }

    return arr;
  }

  public progressBar(student: ShowStudent): Array<number> {
    const startMonth =  new Date(student.startDate).getMonth();

    let arr: Array<number> = new Array();
    switch (startMonth) {
      case 5 :
      case 6 :
      case 7 :
      case 8: {
        arr = this.customArray(student, 0);
        break;
      }
      case 9: {
        arr = this.customArray(student, 1);
        break;
      }
      case 10: {
        arr = this.customArray(student, 2);
        break;
      }
      case 11: {
        arr = this.customArray(student, 3);
        break;
      }
      case 0:
      case 1: {
        arr = this.customArray(student, 4);
        break;
      }
      case 2: {
        arr = this.customArray(student, 5);
        break;
      }
      case 3: {
        arr = this.customArray(student, 6);
        break;
      }
      case 4: {
        arr = this.customArray(student, 7);
        break;
      }

    }
    return arr;
  }
}
