import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Status } from '../../../models/status.model';
import { AdditionalPosition } from '../additional-position.model';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-additional-position',
  templateUrl: './add-additional-position.component.html',
  styleUrls: ['./add-additional-position.component.scss']
})
export class AddAdditionalPositionComponent {

  @Input() display = false;
  @Input() set status(st: Status<AdditionalPosition>) {
      this.st = st;
      if (st.id) {
          this.formInit(st);
      }
  }
  @Output() closeDialog = new EventEmitter();
  @Output() create = new EventEmitter<AdditionalPosition>();
  @Output() edited = new EventEmitter<AdditionalPosition>();

  public form: FormGroup;
  public st: Status<AdditionalPosition>;
  constructor(private fb: FormBuilder) {}

  private formInit(status: Status<AdditionalPosition>) {
      if (status.id === 'new') {
          this.form = this.fb.group({
              label: [''],
          });
      } else if (status.id !== 'new') {
          this.form = this.fb.group({
              label: [status.item.label],
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
          ? this.create.emit(new AdditionalPosition(item.label))
          : this.edited.emit(
                new AdditionalPosition(item.label, +this.st.id)
            );
      this.close();
  }
}
