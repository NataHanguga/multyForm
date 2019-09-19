import { Component } from '@angular/core';
import { Rank } from '../../models/rank.model';
import { SettingComponent } from '../setting/setting.component';
import { SettingBaseService } from './../../services/setting-base.service';

@Component({
    selector: 'app-rank',
    templateUrl: './rank.component.html',
    styleUrls: ['./rank.component.scss']
})

export class RankComponent extends SettingComponent<Rank>  {
    constructor(service: SettingBaseService<Rank>) {
        super(service);
        super.path = 'rank';
    }
}
