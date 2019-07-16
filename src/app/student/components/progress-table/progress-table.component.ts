import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-table',
  templateUrl: './progress-table.component.html',
  styleUrls: ['./progress-table.component.scss']
})
export class ProgressTableComponent implements OnInit {
@Input() pay: number;
@Input() type: string;
@Input() startDate: Date;

  public arr: Array<number> = [];
  private readonly PAY = 50;
  constructor() { }

  ngOnInit() {
    // console.log(this.pay, this.type);
    this.creatreArray();
  }

  creatreArray() {
    const date = new Date(this.startDate).getMonth();
    console.log(date, this.startDate);
    if (date >= 5 && date <= 8) {
      for (let i = 0; i < 8; i++) {
        if (this.type === 'contract') {
          if (this.pay >= this.PAY) {
            this.arr.push(this.PAY);
            this.pay -= this.PAY;
          } else if (this.pay < this.PAY) {
            this.arr.push(this.pay);
            this.pay = 0;
          } else if (this.pay === 0) {
            this.arr.push(0);
          }
        } else {
          this.arr.push(50);
        }
      }
      if (this.pay > 0 ) {
        console.log(this.pay);
        this.arr.push(this.pay);
      } else {
        this.arr.push(0);
      }
  }
    console.log(this.arr);
  }

}
