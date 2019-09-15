import { Component, OnInit } from '@angular/core';
import { PercentService } from './percent.service';
import { Percent } from './percent.model';
import { finalize } from 'rxjs/operators';
import { Status } from '../teacher-categories/status.model';

@Component({
    selector: 'app-percent',
    templateUrl: './percent.component.html',
    styleUrls: ['./percent.component.scss']
})
export class PercentComponent implements OnInit {
    public loading = false;
    public display = false;
    public remove = false;
    public message = '';
    public status = new Status<Percent>();
    public percentList: Percent[] = [];
    constructor(private percentService: PercentService) {}

    ngOnInit() {
        this.getPercents();
    }

    public getPercents(): void {
        this.loading = true;
        this.percentService
            .getPercents()
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Percent[]) => {
                this.percentList = data;
            });
    }

    public setModalDialogForCreation(id: string): void {
        this.display = true;
        this.status = new Status(id, null);
    }

    public setModalDialogForEditing(item: Percent): void {
        this.status = new Status<Percent>(item.id.toString(), item);
        this.display = true;
    }

    public setList(list: Percent[]): void {
        this.percentList = list;
    }

    public delete(id: number): void {
        this.loading = true;
        this.percentService
            .removePercent(id)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Percent[]) => {
                this.setList(data);
            });
    }

    public create(item: Percent): void {
        this.loading = true;
        this.percentService
            .createPercent(item)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Percent[]) => {
                this.setList(data);
            });
    }

    public edit(item: Percent): void {
        this.loading = true;
        this.percentService
            .editPercent(item)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Percent[]) => {
                this.setList(data);
            });
    }

    public setModalDialogForRemoving(item: Percent): void {
        this.remove = true;
        this.message = item.label;
        this.status = new Status(item.id.toString());
        console.log(item, this.remove, this.message, this.status);
    }
}
