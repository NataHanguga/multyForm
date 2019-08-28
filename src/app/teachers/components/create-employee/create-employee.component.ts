import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
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
    public nowYear: number;
    public isTeachRank: boolean = false;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.employeeForm = this.fb.group({
            fullName: new FormControl(null),
            position: new FormControl(null),
            category: new FormControl(null),
            year: new FormControl(null),
            experience:  new FormControl(null),
            teachRank: new FormControl(null),
            education: new FormControl(null)
        });

        this.nowYear = new Date().getFullYear();

        this.positions = [
            {label: 'Select position', value: null},
            {label: 'teacher', value: 'teacher'},
            {label: 'cleaner', value: 'cleaner'},
            {label: 'technic', value: 'technic'},
            {label: 'repaier', value: 'repaier'},
            {label: 'dreasser', value: 'dreasser'},
            {label: 'dreasser', value: 'dreasser'}
        ];

        this.categories = [
            {label: 'Select category', value: null},
            {label: 'teacher high cat', value: 'teacher high cat'},
            {label: 'teacher first cat', value: 'teacher first cat'},
            {label: 'teacher second cat', value: 'teacher second cat'},
            {label: 'teacher tach cat', value: 'teacher teach cat'},
        ];

        this.teacherRank = [
            {label: 'Select teacher rank', value: null},
            {label: 'methodist', value: 'methodist'},
            {label: 'senior teacher', value: 'senior teacher'},
        ];

        this.educationSelection = [
            {label: 'Select education', value: null},
            {label: 'high III-IV', value: 'high III-IV'},
            {label: 'high I-II', value: 'high I-II'},
        ];
    }

    public setEmployeeValue(event: string, field: string) {
        console.log(event, field);
        this.employeeForm.get(field).setValue(event);
    }

}
