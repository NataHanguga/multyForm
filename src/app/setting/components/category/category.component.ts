import { Component, OnInit } from '@angular/core';
import { Status } from '../../models/status.model';
import { Category } from './category.model';
import { CategoryService } from './category.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public loading = false;
  public display = false;
  public remove = false;
  public message = '';
  public status = new Status<Category>();
  public list: Category[] = [];
  constructor(private service: CategoryService) {}

  ngOnInit() {
      this.getPercents();
  }

  public getPercents(): void {
      this.loading = true;
      this.service
          .get()
          .pipe(finalize(() => (this.loading = false)))
          .subscribe((data: Category[]) => {
              this.setList(data);
          });
  }

  public setModalDialogForCreation(id: string): void {
      this.display = true;
      this.status = new Status(id);
  }

  public setModalDialogForEditing(item: Category): void {
      this.status = new Status<Category>(item.id.toString(), item);
      this.display = true;
  }

  public setList(list: Category[]): void {
      this.list = list;
  }

  public delete(id: number): void {
      this.loading = true;
      this.service
          .remove(id)
          .pipe(finalize(() => (this.loading = false)))
          .subscribe((data: Category[]) => {
              this.setList(data);
          });
  }

  public create(item: Category): void {
      this.loading = true;
      this.service
          .create(item)
          .pipe(finalize(() => (this.loading = false)))
          .subscribe((data: Category[]) => {
              this.setList(data);
          });
  }

  public edit(item: Category): void {
      this.loading = true;
      this.service
          .edit(item)
          .pipe(finalize(() => (this.loading = false)))
          .subscribe((data: Category[]) => {
              this.setList(data);
          });
  }

  public setModalDialogForRemoving(item: Category): void {
      this.remove = true;
      this.message = item.label;
      this.status = new Status(item.id.toString());
  }

}
