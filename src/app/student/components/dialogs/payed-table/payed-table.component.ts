import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/student/models/Student';

@Component({
  selector: 'app-payed-table',
  templateUrl: './payed-table.component.html',
  styleUrls: ['./payed-table.component.scss']
})
export class PayedTableComponent implements OnInit {
  @Input() student: Student;
  public monthArr = ['Sep', 'Oct', 'Nov', 'Des', 'Feb', 'Mar', 'Apr', 'May', 'Residual'];
  constructor() { }

  ngOnInit() {
  }



}
