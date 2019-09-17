import { SettingBaseService } from './../../services/setting-base.service';
import { Component } from '@angular/core';
import { Percent } from '../../models/percent.model';
import { SettingComponent } from '../setting/setting.component';

@Component({
    selector: 'app-percent',
    templateUrl: './percent.component.html',
    styleUrls: ['./percent.component.scss']
})

export class PercentComponent extends SettingComponent<Percent>  {
    constructor(service: SettingBaseService<Percent>) {
        super(service);
        super.path = 'percent';
    }
}
