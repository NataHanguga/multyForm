import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Rank } from '../../../models/rank.model';
import { Status } from '../../../models/status.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-rank',
  templateUrl: './add-rank.component.html',
  styleUrls: ['./add-rank.component.scss']
})
export class AddRankComponent {

  @Input() display = false;
  @Input() set status(st: Status<Rank>) {
      this.st = st;
      if (st.id) {
          this.formInit(st);
      }
  }
  @Output() closeDialog = new EventEmitter();
  @Output() create = new EventEmitter<Rank>();
  @Output() edited = new EventEmitter<Rank>();

  public form: FormGroup;
  public st: Status<Rank>;
  constructor(private fb: FormBuilder) {}

  private formInit(status: Status<Rank>) {
      console.log(status);
      if (status.id === 'new') {
          this.form = this.fb.group({
              label: [''],
              value: [''],
          });
      } else if (status.id !== 'new') {
          this.form = this.fb.group({
              label: [status.item.label],
              value: [status.item.value],
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
          ? this.create.emit(new Rank(item.label, item.value))
          : this.edited.emit(
                new Rank(item.label, item.value, +this.st.id)
            );
      this.close();
  }
}
