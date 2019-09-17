import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Status } from '../../../models/status.model';
import { Category } from '../../../models/category.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  @Input() display = false;
  @Input() set status(st: Status<Category>) {
      this.st = st;
      if (st.id) {
          this.formInit(st);
      }
  }
  @Output() closeDialog = new EventEmitter();
  @Output() create = new EventEmitter<Category>();
  @Output() edited = new EventEmitter<Category>();

  public form: FormGroup;
  public st: Status<Category>;
  constructor(private fb: FormBuilder) {}

  private formInit(status: Status<Category>) {
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
          ? this.create.emit(new Category(item.label))
          : this.edited.emit(
                new Category(item.label, +this.st.id)
            );
      this.close();
  }
}
