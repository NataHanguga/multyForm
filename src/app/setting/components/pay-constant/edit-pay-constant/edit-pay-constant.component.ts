import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SettingService } from 'src/app/setting/services/setting.service';
import { Status } from '../../../models/status.model';
import { Pay } from '../../../models/pay.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-edit-pay-constant',
    templateUrl: './edit-pay-constant.component.html',
    styleUrls: ['./edit-pay-constant.component.scss']
})
export class EditPayConstantComponent {
    @Input() display = false;
    @Input() set status(st: Status<Pay>) {
        this.st = st;
        if (st.id) {
            this.formInit(st);
        }
    }
    @Output() closeDialog = new EventEmitter();
    @Output() edited = new EventEmitter<Pay>();

    public form: FormGroup;
    public st: Status<Pay>;
    constructor(private fb: FormBuilder) {}

    private formInit(status: Status<Pay>) {
        this.form = this.fb.group({
            label: [status.item]
        });
    }

    public close(): void {
        this.display = false;
        this.form.reset();
        this.closeDialog.emit();
    }

    public edit(): void {
        this.edited.emit(this.form.value.label);
        this.close();
    }
}
