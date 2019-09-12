import { Grade } from './grade.model';
import { SettingService } from './../../services/setting.service';
import { Component, OnInit } from '@angular/core';
import { Status } from './status.model';

@Component({
    selector: 'app-teacher-categories',
    templateUrl: './teacher-categories.component.html',
    styleUrls: ['./teacher-categories.component.scss']
})
export class TeacherCategoriesComponent implements OnInit {
    public gradeList: Grade[];
    public display: boolean = false;
    public status = new Status();
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

    public setModalDialogForCreation(status: string): void {
        this.display = true;
        this.status.id = status;
    }

    public setModalDialogForEdition(grade: Grade): void {
        this.display = true;
        this.status = new Status(grade.id.toString(), grade);
    }

}
