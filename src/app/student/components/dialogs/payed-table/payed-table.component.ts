import { SettingService } from 'src/app/setting/services/setting.service';
import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/student/models/student';

@Component({
  selector: 'app-payed-table',
  templateUrl: './payed-table.component.html',
  styleUrls: ['./payed-table.component.scss']
})
export class PayedTableComponent implements OnInit {
  @Input() student: Student;
  public monthArr = ['Sep', 'Oct', 'Nov', 'Des', 'Feb', 'Mar', 'Apr', 'May', 'Residual'];
  public payConstant: string;
  constructor(private settingService: SettingService) { }

  ngOnInit() {
    this.getConstant();
  }

  private getConstant(): void {
    this.payConstant === undefined
      ? (this.settingService.getPayConstant().subscribe(data => {
        this.payConstant = data.pay;
      }))
      : null;
  }



}
