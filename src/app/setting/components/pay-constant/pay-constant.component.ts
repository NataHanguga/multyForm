import { SettingBaseService } from './../../services/setting-base.service';
import { Component } from '@angular/core';
import { Pay } from '../../models/pay.model';
import { SettingComponent } from '../setting/setting.component';

@Component({
    selector: 'app-pay-constant',
    templateUrl: './pay-constant.component.html',
    styleUrls: ['./pay-constant.component.scss']
})
export class PayConstantComponent extends SettingComponent<Pay>  {
    public list1 = [].push(super.list);
    constructor(service: SettingBaseService<Pay>) {
        super(service);
        super.path = 'pay';
    }
}
