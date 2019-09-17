import { SettingBaseService } from '../../services/setting-base.service';
import { Grade } from '../../models/grade.model';
import { Component } from '@angular/core';
import { SettingComponent } from '../setting/setting.component';

@Component({
    selector: 'app-grade',
    templateUrl: './grade.component.html',
    styleUrls: ['./grade.component.scss']
})
export class GradeComponent extends SettingComponent<Grade>  {
    constructor(service: SettingBaseService<Grade>) {
        super(service);
        super.path = 'grade';
    }
}
