import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Status } from '../../../models/status.model';
import { Position } from '../../../models/position.model';

@Component({
    selector: 'app-add-position',
    templateUrl: './add-position.component.html',
    styleUrls: ['./add-position.component.scss']
})
export class AddPositionComponent {
    @Input() display = false;
    @Input() set status(st: Status<Position>) {
        this.st = st;
        if (st.id) {
            this.formInit(st);
        }
    }
    @Output() closeDialog = new EventEmitter();
    @Output() create = new EventEmitter<Position>();
    @Output() edited = new EventEmitter<Position>();

    public form: FormGroup;
    public st: Status<Position>;
    constructor(private fb: FormBuilder) {}

    private formInit(status: Status<Position>) {
        console.log(status);
        if (status.id === 'new') {
            this.form = this.fb.group({
                position: [''],
                salary: ['']
            });
        } else if (status.id !== 'new') {
            this.form = this.fb.group({
                position: [status.item.position],
                salary: [status.item.salary]
            });
        }
    }

    public close(): void {
        this.display = false;
        this.form.reset();
        this.closeDialog.emit();
    }

    public edit(): void {
        const item = this.form.value;
        this.st.id === 'new'
            ? this.create.emit(new Position(item.position, item.salary))
            : this.edited.emit(
                  new Position(item.position, item.salary, +this.st.id)
              );
        this.close();
    }
}
