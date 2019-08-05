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
      console.log(arr);
      return arr;
  }

  private customArray(student: ShowStudent, noPayedMonth: number): Array<number> {
    let arr: Array<number> = new Array();
    let arrLength  = 9;

    arrLength = arrLength - noPayedMonth;
    arr = this.generateArray(arrLength, student);

    for (let i = 0; i < noPayedMonth; i++) {
      arr.unshift(0);
    }

    return arr;
  }

  public progressBar(student: ShowStudent): Array<number> {
    const startMonth =  new Date(student.startDate).getMonth();
    console.log(student, startMonth);

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
        console.log(arr);
        break;
      }
      case 10: {
        arr = this.customArray(student, 2);
        console.log(arr);
        break;
      }
      case 11: {
        arr = this.customArray(student, 3);
        console.log(arr);
        break;
      }
      case 0:
      case 1: {
        arr = this.customArray(student, 4);
        console.log(arr);
        break;
      }
      case 2: {
        arr = this.customArray(student, 5);
        console.log(arr);
        break;
      }
      case 3: {
        arr = this.customArray(student, 6);
        console.log(arr);
        break;
      }
      case 4: {
        arr = this.customArray(student, 7);
        console.log(arr);
        break;
      }

    }
    return arr;
/*
  9: oct
  10: nov
  11: dec
  1: feb
  2: march
  3: apr
  4: may
  */

  }
}
