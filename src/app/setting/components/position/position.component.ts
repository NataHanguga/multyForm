import { SettingBaseService } from './../../services/setting-base.service';
import { Component } from '@angular/core';
import { Position } from '../../models/position.model';
import { SettingComponent } from '../setting/setting.component';

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.scss']
})

export class PositionComponent extends SettingComponent<Position>  {
    constructor(service: SettingBaseService<Position>) {
        super(service);
        super.path = 'position';
    }
}

