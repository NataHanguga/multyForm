import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Percent } from '../percent.model';
import { Status } from '../../../models/status.model';

@Component({
    selector: 'app-add-percent',
    templateUrl: './add-percent.component.html',
    styleUrls: ['./add-percent.component.scss']
})
export class AddPercentComponent {
    @Input() display = false;
    @Input() set status(st: Status<Percent>) {
        this.st = st;
        if (st.id) {
            this.formInit(st);
        }
    }
    @Output() closeDialog = new EventEmitter();
    @Output() create = new EventEmitter<Percent>();
    @Output() edited = new EventEmitter<Percent>();

    public form: FormGroup;
    public st: Status<Percent>;
    constructor(private fb: FormBuilder) {}

    private formInit(status: Status<Percent>) {
        console.log(status);
        if (status.id === 'new') {
            this.form = this.fb.group({
                label: [''],
                value: ['']
            });
        } else if (status.id !== 'new') {
            this.form = this.fb.group({
                label: [status.item.label],
                value: [status.item.value]
            });
        }
    }

    public close(): void {
        this.display = false;
        this.form.reset();
        this.closeDialog.emit();
    }

    public edit(): void {
        const percent = this.form.value;
        this.st.id === 'new'
            ? this.create.emit(new Percent(percent.label, percent.value))
            : this.edited.emit(
                  new Percent(percent.label, percent.value, +this.st.id)
              );
        this.close();
    }
}
