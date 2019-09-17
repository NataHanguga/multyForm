import { SettingBaseService } from './../../services/setting-base.service';
import { Grade } from '../../models/grade.model';
import { Component } from '@angular/core';
import { SettingComponent } from '../setting/setting.component';

@Component({
    selector: 'app-teacher-categories',
    templateUrl: './teacher-categories.component.html',
    styleUrls: ['./teacher-categories.component.scss']
})
export class TeacherCategoriesComponent extends SettingComponent<Grade>  {
    constructor(service: SettingBaseService<Grade>) {
        super(service);
        super.path = 'grade';
    }
}
