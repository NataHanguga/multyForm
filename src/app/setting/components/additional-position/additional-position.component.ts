import { Component, OnInit } from '@angular/core';
import { Status } from '../teacher-categories/status.model';
import { AdditionalPosition } from './additional-position.model';
import { AdditionalPositionService } from './additional-position.service';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-additional-position',
    templateUrl: './additional-position.component.html',
    styleUrls: ['./additional-position.component.scss']
})
export class AdditionalPositionComponent implements OnInit {
    public loading = false;
    public display = false;
    public remove = false;
    public message = '';
    public status = new Status<AdditionalPosition>();
    public list: AdditionalPosition[] = [];
    constructor(private service: AdditionalPositionService) {}

    ngOnInit() {
        this.getPercents();
    }

    public getPercents(): void {
        this.loading = true;
        this.service
            .get()
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: AdditionalPosition[]) => {
                this.setList(data);
            });
    }

    public setModalDialogForCreation(id: string): void {
        this.display = true;
        this.status = new Status(id);
    }

    public setModalDialogForEditing(item: AdditionalPosition): void {
        this.status = new Status<AdditionalPosition>(item.id.toString(), item);
        this.display = true;
    }

    private setList(list: AdditionalPosition[]): void {
        console.log(list);
        this.list = list;
    }

    public delete(id: number): void {
        this.loading = true;
        this.service
            .remove(id)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: AdditionalPosition[]) => {
                this.setList(data);
            });
    }

    public create(item: AdditionalPosition): void {
        this.loading = true;
        this.service
            .create(item)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: AdditionalPosition[]) => {
                this.setList(data);
            });
    }

    public edit(item: AdditionalPosition): void {
        this.loading = true;
        this.service
            .edit(item)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: AdditionalPosition[]) => {
                this.setList(data);
            });
    }

    public setModalDialogForRemoving(item: AdditionalPosition): void {
        this.remove = true;
        this.message = item.label;
        this.status = new Status(item.id.toString());
    }
}
