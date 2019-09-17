import { Grade } from '../../../models/grade.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Status } from '../../../models/status.model';

@Component({
    selector: 'app-add-grade',
    templateUrl: './add-grade.component.html',
    styleUrls: ['./add-grade.component.scss']
})
export class AddGradeComponent {
    @Input() display = false;
    @Input() set status(st: Status<Grade>) {
        this.st = st;
        if (st.id) {
            this.formInit(st);
        }
    }
    @Output() closeDialog = new EventEmitter();
    @Output() create = new EventEmitter<Grade>();
    @Output() edited = new EventEmitter<Grade>();

    public gradeForm: FormGroup;
    public st: Status<Grade>;
    constructor(private fb: FormBuilder) { }

    private formInit(status: Status<Grade>) {
        console.log(status);
        if (status.id === 'new') {
            this.gradeForm = this.fb.group({
                category: [''],
                grade: [''],
                salary: [''],
            });
        } else if (status.id !== 'new') {
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
