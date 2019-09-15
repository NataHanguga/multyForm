import { Component, OnInit } from '@angular/core';
import { Status } from '../teacher-categories/status.model';
import { Rank } from './rank.model';
import { RankService } from './rank.service';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-rank',
    templateUrl: './rank.component.html',
    styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {
    public loading = false;
    public display = false;
    public remove = false;
    public message = '';
    public status = new Status<Rank>();
    public list: Rank[] = [];
    constructor(private service: RankService) {}

    ngOnInit() {
        this.getPercents();
    }

    public getPercents(): void {
        this.loading = true;
        this.service
            .get()
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Rank[]) => {
                this.setList(data);
            });
    }

    public setModalDialogForCreation(id: string): void {
        this.display = true;
        this.status = new Status(id);
    }

    public setModalDialogForEditing(item: Rank): void {
        this.status = new Status<Rank>(item.id.toString(), item);
        this.display = true;
    }

    public setList(list: Rank[]): void {
        this.list = list;
    }

    public delete(id: number): void {
        this.loading = true;
        this.service
            .remove(id)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Rank[]) => {
                this.setList(data);
            });
    }

    public create(item: Rank): void {
        this.loading = true;
        this.service
            .create(item)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Rank[]) => {
                this.setList(data);
            });
    }

    public edit(item: Rank): void {
        this.loading = true;
        this.service
            .edit(item)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Rank[]) => {
                this.setList(data);
            });
    }

    public setModalDialogForRemoving(item: Rank): void {
        this.remove = true;
        this.message = item.label;
        this.status = new Status(item.id.toString());
    }
}
