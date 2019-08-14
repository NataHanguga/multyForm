import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Student } from 'src/app/student/models/Student';

@Component({
    selector: 'app-student-row-menu',
    templateUrl: './student-row-menu.component.html',
    styleUrls: ['./student-row-menu.component.scss']
})
export class StudentRowMenuComponent implements OnInit {
    @Input() student: Student;
    @Output() changed = new EventEmitter();
    @Output() removed = new EventEmitter();
    public items: MenuItem[];
    public displayEdit = false;
    public displayPay = false;
    constructor() { }

    ngOnInit() {
        if (this.student.studentType === 'contract') {
            this.items = [
                {
                    label: 'Pay',
                    command: (): void => {
                        this.displayPay = true;
                    }
                },
                {
                    label: 'Edit',
                    command: (): void => {
                        this.displayEdit = true;
                    }
                },
                {
                    label: 'Delete',
                    command: (): void => {
                        this.removed.emit(this.student.id);
                    }
                }
            ];
        } else {
            this.items = [
                {
                    label: 'Edit',
                    command: (): void => {
                        this.displayEdit = true;
                    }
                },
                {
                    label: 'Delete',
                    command: (): void => {
                        this.removed.emit(this.student.id);
                    }
                }
            ];
        }
    }

    public editStudent(event): void {
        this.changed.emit(event);
    }

}
