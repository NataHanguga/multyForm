import { Grade } from './grade.model';
import { SettingService } from './../../services/setting.service';
import { Component, OnInit } from '@angular/core';
import { Status } from './status.model';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-teacher-categories',
    templateUrl: './teacher-categories.component.html',
    styleUrls: ['./teacher-categories.component.scss']
})
export class TeacherCategoriesComponent implements OnInit {
    public gradeList: Grade[];
    public display: boolean = false;
    public remove: boolean = false;
    public loading: boolean = false;
    public removeMessage: string;
    private editedGrade: Grade;
    public status = new Status<Grade>();
    constructor(private settingService: SettingService) {}

    ngOnInit(): void {
        this.getGrades();
    }

    public getGrades(): void {
        this.loading = true;
        this.settingService
            .getTeachersCategories()
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Grade[]) => {
                this.gradeList = data;
            });
    }

    public setModalDialogForCreation(id: string): void {
        this.display = true;
        this.status = new Status(id, null);
    }

    public setModalDialogForEdition(grade: Grade): void {
        this.display = true;
        this.status = new Status(grade.id.toString(), grade);
    }

    public setModalDialogForRemoving(grade: Grade): void {
        this.remove = true;
        this.editedGrade = grade;
        this.removeMessage = `${grade.category}`;
    }

    public removeCategory(): void {
        this.loading = true;
        this.settingService
            .removeTeacherCategory(this.editedGrade.id)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Grade[]) => {
                this.gradeList = data;
            });
    }

    public createGrade(newGrade: Grade): void {
        this.settingService
            .addTeacherCategories(newGrade)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Grade[]) => {
                this.gradeList = data;
            });
    }

    public editGrade(editGrade: Grade): void {
        editGrade.id = +this.status.id;
        this.settingService
            .editTeacherCategory(editGrade)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Grade[]) => {
                this.gradeList = data;
            });
    }
}
