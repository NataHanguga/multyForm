import { Grade } from '../../../models/grade.model';
import { SettingService } from 'src/app/setting/services/setting.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Status } from '../../../models/status.model';

@Component({
    selector: 'app-add-teacher-categories',
    templateUrl: './add-teacher-categories.component.html',
    styleUrls: ['./add-teacher-categories.component.scss']
})
export class AddTeacherCategoriesComponent implements OnInit {
    @Input() display = false;
    @Input() status: Status<Grade> = new Status<Grade>();
    @Output() closeDialog = new EventEmitter();
    @Output() create = new EventEmitter<Grade>();
    @Output() edited = new EventEmitter<Grade>();
    // @Output() updatedList = new EventEmitter<Grade[]>();

    public gradeForm: FormGroup;
    constructor(private fb: FormBuilder) { }

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
                category: [this.status.item.category],
                grade: [this.status.item.grade],
                salary: [this.status.item.salary],
            });
        }
    }

    public close(): void {
        this.display = false;
        this.gradeForm.reset();
        this.closeDialog.emit();
    }

    public edit(): void {
        this.status.id === 'new'
            ? this.create.emit(this.gradeForm.value)
            : this.edited.emit(this.gradeForm.value);
        this.close();
    }

}
