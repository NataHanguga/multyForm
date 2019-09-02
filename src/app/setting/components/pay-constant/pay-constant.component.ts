import { SettingService } from './../../services/setting.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pay-constant',
    templateUrl: './pay-constant.component.html',
    styleUrls: ['./pay-constant.component.scss']
})
export class PayConstantComponent implements OnInit {
    public pay: string;
    public display: boolean = false;
    constructor(private settingService: SettingService) { }

    ngOnInit() {
       this.getPay();
    }

    public getPay(): void {
        this.settingService.getPayConstant().subscribe(data => {
            this.pay = data.pay;
        });
    }

}
