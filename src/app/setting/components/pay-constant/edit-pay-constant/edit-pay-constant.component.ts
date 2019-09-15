import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SettingService } from 'src/app/setting/services/setting.service';

@Component({
  selector: 'app-edit-pay-constant',
  templateUrl: './edit-pay-constant.component.html',
  styleUrls: ['./edit-pay-constant.component.scss']
})
export class EditPayConstantComponent implements OnInit {
  @Input() display = false;
  @Input() pay: string;
  @Output() dispalyChange = new EventEmitter<boolean>();
  @Output() edited = new EventEmitter();
  @Output() payChange = new EventEmitter();
  constructor(private settingService: SettingService) { }

  ngOnInit() {
  }

  public close(): void {
    this.display = false;
    this.dispalyChange.emit(this.display);
  }

  public edit(): void {
    this.settingService.editPayConstant(this.pay).subscribe(data => {
      this.payChange.emit(this.pay);
    });
    this.close();
  }

}
