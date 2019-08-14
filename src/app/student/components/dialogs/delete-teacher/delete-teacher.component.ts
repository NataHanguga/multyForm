import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-delete-teacher',
  templateUrl: './delete-teacher.component.html',
  styleUrls: ['./delete-teacher.component.scss']
})
export class DeleteTeacherComponent {
    @Input() display: boolean;
    @Output() closeDialog = new EventEmitter<boolean>();
    @Output() list = new EventEmitter<boolean>();

    constructor() { }

    public cancel() {
        this.closeDialog.emit(!this.display);
    }

    public deleteTeacher() {
        this.list.emit(true);
        this.cancel();
    }

}
