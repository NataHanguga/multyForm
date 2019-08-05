import { Component, OnInit, Input } from '@angular/core';
import { ShowStudent } from '../../models/showStudent';

@Component({
  selector: 'app-progress-table',
  templateUrl: './progress-table.component.html',
  styleUrls: ['./progress-table.component.scss']
})
export class ProgressTableComponent implements OnInit {
@Input() student: ShowStudent;

  public arr: Array<number> = [];
  private readonly PAY = 50;
  constructor() { }

  ngOnInit() {
    // console.log(this.pay, this.type);
    this.creatreArray();
  }

  creatreArray() {
    const date = new Date(this.student.startDate).getMonth();
    console.log(date, this.student.startDate);
    if (date >= 5 && date <= 8) {
      for (let i = 0; i < 8; i++) {
        if (this.student.studentType === 'contract') {
          if (this.student.payArray >= this.PAY) {
            this.arr.push(this.PAY);
            this.student.payArray -= this.PAY;
          } else if (this.student.payArray < this.PAY) {
            this.arr.push(this.student.payArray);
            this.student.payArray = 0;
          } else if (this.student.payArray === 0) {
            this.arr.push(0);
          }
        } else {
          this.arr.push(50);
        }
      }
      if (this.student.payArray > 0 ) {
        console.log(this.student.payArray);
        this.arr.push(this.student.payArray);
      } else {
        this.arr.push(0);
      }
  }
    console.log(this.arr);
  }

}
