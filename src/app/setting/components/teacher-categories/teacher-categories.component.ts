import { Grade } from './grade.model';
import { SettingService } from './../../services/setting.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-teacher-categories',
    templateUrl: './teacher-categories.component.html',
    styleUrls: ['./teacher-categories.component.scss']
})
export class TeacherCategoriesComponent implements OnInit {
    public gradeList: Grade[];
    public display: boolean;
    public status: string = '';
    constructor(private settingService: SettingService) { }

    ngOnInit() {
        this.getGrades();
    }

    public getGrades(): void {
        this.settingService.getTeachersCategories().subscribe((data: Grade[]) => {
            console.log(data);
            this.gradeList = data;
        });
    }

}
