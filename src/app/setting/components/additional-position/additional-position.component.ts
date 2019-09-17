import { SettingBaseService } from './../../services/setting-base.service';
import { Component } from '@angular/core';
import { AdditionalPosition } from '../../models/additional-position.model';
import { SettingComponent } from '../setting/setting.component';

@Component({
    selector: 'app-additional-position',
    templateUrl: './additional-position.component.html',
    styleUrls: ['./additional-position.component.scss']
})

export class AdditionalPositionComponent extends SettingComponent<AdditionalPosition>  {
    constructor(service: SettingBaseService<AdditionalPosition>) {
        super(service);
        super.path = 'additional-position';
    }
}
