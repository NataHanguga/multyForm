import { Education } from '../../../models/education.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Status } from '../../../models/status.model';

@Component({
    selector: 'app-add-education',
    templateUrl: './add-education.component.html',
    styleUrls: ['./add-education.component.scss']
})
export class AddEducationComponent {
    @Input() display = false;
    @Input() set status(st: Status<Education>) {
        this.st = st;
        if (st.id) {
            this.formInit(st);
        }
    }
    @Output() closeDialog = new EventEmitter();
    @Output() create = new EventEmitter<Education>();
    @Output() edited = new EventEmitter<Education>();

    public form: FormGroup;
    public st: Status<Education>;

    constructor(private fb: FormBuilder) { }

    private formInit(status: Status<Education>) {
        console.log(status.id, status.item)
        if (this.status.id === 'new') {
            this.form = this.fb.group({
                label: ['']
            });
        } else {
            this.form = this.fb.group({
                label: [this.status.item.label]
            });
        }
    }

    public close(): void {
        this.display = false;
        this.form.reset();
        this.closeDialog.emit();
    }

    public edit(): void {
        const label = this.form.value.label;
        console.log(label);
        this.status.id === 'new'
            ? this.create.emit(new Education(label))
            : this.edited.emit(new Education(label, +this.status.id));

        this.close();

    }
}
