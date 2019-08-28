import {
    FormGroup,
    FormBuilder,
    FormControl,
    Validators
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
    public employeeForm: FormGroup;
    public positions: SelectItem[];
    public categories: SelectItem[];
    public teacherRank: SelectItem[];
    public educationSelection: SelectItem[];
    public additionalPositions: SelectItem[];
    public nowYear: number;
    public isTeachRank = false;
    public addingPosition = false;
    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.employeeForm = this.fb.group({
            fullName: new FormControl(null, Validators.required),
            position: new FormControl(null, Validators.required),
            category: new FormControl(null),
            year: new FormControl(null),
            experience: new FormControl(null),
            teachRank: new FormControl(null),
            education: new FormControl(null),
            teachHours: new FormControl(null),
            concertHours: new FormControl(null),
            additionalPositions: new FormControl(null),
            addTeachHours: new FormControl(null),
            addConcertHours: new FormControl(null)
        });

        this.nowYear = new Date().getFullYear();

        this.positions = [
            { label: 'Select position', value: null },
            { label: 'teacher', value: 'teacher' },
            { label: 'cleaner', value: 'cleaner' },
            { label: 'technic', value: 'technic' },
            { label: 'repaier', value: 'repaier' },
            { label: 'dreasser', value: 'dreasser' }
        ];

        this.categories = [
            { label: 'Select category', value: null },
            { label: 'teacher high cat', value: 'teacher high cat' },
            { label: 'teacher first cat', value: 'teacher first cat' },
            { label: 'teacher second cat', value: 'teacher second cat' },
            { label: 'teacher tach cat', value: 'teacher teach cat' }
        ];

        this.teacherRank = [
            { label: 'Select teacher rank', value: null },
            { label: 'methodist', value: 'methodist' },
            { label: 'senior teacher', value: 'senior teacher' }
        ];

        this.educationSelection = [
            { label: 'Select education', value: null },
            { label: 'high III-IV', value: 'high III-IV' },
            { label: 'high I-II', value: 'high I-II' }
        ];

        this.additionalPositions = [
            { label: 'Select education', value: null },
            { label: 'director', value: 'director' },
            { label: 'deputy director', value: 'deputy director' },
            { label: 'deputy departament', value: 'deputy departament' }
        ];
    }

    public setEmployeeValue(event: string, field: string) {
        this.employeeForm.get(field).setValue(event);
    }

    public submitForm(value: Teacher): void {
        let employee;
        if (this.employeeForm.valid) {
            if (value.position === 'teacher') {
                employee = value;
            } else {
                employee = new TechnicEmployee(value.fullName, value.position);
            }
            console.log(value);
        } else {

        }
    }

    public resetForm(): void {
        this.employeeForm.reset();
    }
}
