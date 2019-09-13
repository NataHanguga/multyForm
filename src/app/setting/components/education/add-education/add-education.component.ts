import { Education } from './../education.model';
import { SettingService } from 'src/app/setting/services/setting.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Status } from '../../teacher-categories/status.model';

@Component({
    selector: 'app-add-education',
    templateUrl: './add-education.component.html',
    styleUrls: ['./add-education.component.scss']
})
export class AddEducationComponent implements OnInit {
    @Input() display: boolean = false;
    @Input() status: Status<Education> = new Status<Education>();
    @Output() closeDialog = new EventEmitter();
    @Output() create = new EventEmitter<Education>();
    @Output() edited = new EventEmitter<Education>();
    @Output() updatedList = new EventEmitter<Education[]>();

    public form: FormGroup;
    private editedList: Education[] = [];
    constructor(private fb: FormBuilder, private settingService: SettingService) { }

    ngOnInit() {
        this.formInit();
    }

    private formInit() {
        console.log(this.status);
        if (this.status.id === 'new') {
            this.form = this.fb.group({
                label: ['']
            });
        } else if (this.status.id !== 'new') {
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

        this.updatedList.emit(this.editedList);
        this.close();

    }
}
