import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-delete-teacher',
  templateUrl: './delete-teacher.component.html',
  styleUrls: ['./delete-teacher.component.scss']
})
export class DeleteTeacherComponent {
    @Input() display: boolean;
    @Output() list: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    public cancel() {
        this.display = false;
    }

    public deleteTeacher() {
        this.list.emit(true);
        this.display = false;
    }

}
