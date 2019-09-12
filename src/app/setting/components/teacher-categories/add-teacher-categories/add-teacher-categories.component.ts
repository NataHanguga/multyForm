import { Grade } from './../grade.model';
import { SettingService } from 'src/app/setting/services/setting.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Status } from '../status.model';

@Component({
    selector: 'app-add-teacher-categories',
    templateUrl: './add-teacher-categories.component.html',
    styleUrls: ['./add-teacher-categories.component.scss']
})
export class AddTeacherCategoriesComponent implements OnInit {
    @Input() display = false;
    @Input() status: Status = new Status();
    @Output() closeDialog = new EventEmitter();
    @Output() updatedList = new EventEmitter<Grade[]>();

    public gradeForm: FormGroup;
    constructor(private fb: FormBuilder, private settingService: SettingService) { }

    ngOnInit() {
        this.formInit();
    }

    private formInit() {
        console.log(this.status);
        if (this.status.id === 'new') {
            this.gradeForm = this.fb.group({
                category: [''],
                grade: [''],
                salary: [''],
            });
        } else if (this.status.id !== 'new') {
            this.gradeForm = this.fb.group({
                category: [this.status.grade.category],
                grade: [this.status.grade.grade],
                salary: [this.status.grade.salary],
            });
        }
    }

    public close(): void {
        this.display = false;
        this.gradeForm.reset();
        this.closeDialog.emit(false);
    }

    public edit(): void {
        this.status.id === 'new'
            ? this.createGrade(this.gradeForm.value)
            : this.editGrade(this.gradeForm.value);
        this.close();
    }

    public setValue(key: string, value: string): void {
        this.gradeForm.get(key).setValue(value);
    }

    public createGrade(newGrade: Grade): void {
        this.settingService.addTeacherCategories(newGrade).subscribe((data: Grade[]) => {
            this.updatedList.emit(data);
        });
    }

    public editGrade(editGrade: Grade): void {
        editGrade.id = +this.status.id;
        this.settingService.editTeacherCategory(editGrade).subscribe((data: Grade[]) => {
            this.updatedList.emit(data);
        });
    }

}
