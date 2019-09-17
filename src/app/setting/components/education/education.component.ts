import { SettingBaseService } from './../../services/setting-base.service';
import { Component } from '@angular/core';
import { Education } from '../../models/education.model';
import { SettingComponent } from '../setting/setting.component';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})

export class EducationComponent extends SettingComponent<Education>  {
    constructor(service: SettingBaseService<Education>) {
        super(service);
        super.path = 'education';
    }
}
