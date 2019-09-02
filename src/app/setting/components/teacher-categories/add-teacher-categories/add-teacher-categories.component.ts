import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-add-teacher-categories',
    templateUrl: './add-teacher-categories.component.html',
    styleUrls: ['./add-teacher-categories.component.scss']
})
export class AddTeacherCategoriesComponent implements OnInit {
    @Input() display: boolean = false;
    @Input() status: string;
    @Output() displayChanged = new EventEmitter();

    public gradeForm: FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.formInit();
    }

    private formInit() {
        if (this.status === 'new') {
            this.gradeForm = this.fb.group({
                cartegory: [null],
                grade: [null],
                salary: [null]
            });
        } else {

        }
    }

    public close(): void {
        this.display = false;
        this.displayChanged.emit('');
    }

    public edit(): void {
        this.close();
    }

    public setValue(key: string, value: string): void {
        this.gradeForm.get(key).setValue(value);
    }

}
