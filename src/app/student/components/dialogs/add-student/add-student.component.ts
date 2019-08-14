import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StudentService } from 'src/app/student/services/student.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
    @Input() display: boolean;
    @Output() closeDialog = new EventEmitter();
    @Output() list = new EventEmitter();
    public student = this.studentService.initialSubject();
    public types: SelectItem[] = [
        { label: 'Contract', value: 'contract' },
        { label: 'Beneficiary', value: 'beneficiary' }
    ];
    private selectedStudentType = '';

    constructor(private studentService: StudentService) { }

    public changeStudentType(value): void {
        this.selectedStudentType = (value === null) ?
            this.types[0].value : value;
    }

    public cancel(): void {
        this.student.reset();
        this.selectedStudentType = '';
        this.closeDialog.emit(!this.display);
    }

    public saveNewStudent(value): void {
        value.studentType = this.selectedStudentType;
        this.list.emit(value);
        this.cancel();
    }
}
