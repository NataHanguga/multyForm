import { Component, OnInit } from '@angular/core';
import { Status } from '../teacher-categories/status.model';
import { PositionService } from './position.service';
import { Position } from './position.model';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
    public loading = false;
    public display = false;
    public remove = false;
    public message = '';
    public status = new Status<Position>();
    public list: Position[] = [];
    constructor(private service: PositionService) {}

    ngOnInit() {
        this.getPercents();
    }

    public getPercents(): void {
        this.loading = true;
        this.service
            .get()
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Position[]) => {
                this.setList(data);
            });
    }

    public setModalDialogForCreation(id: string): void {
        this.display = true;
        this.status = new Status(id);
    }

    public setModalDialogForEditing(item: Position): void {
        this.status = new Status<Position>(item.id.toString(), item);
        this.display = true;
    }

    public setList(list: Position[]): void {
        this.list = list;
    }

    public delete(id: number): void {
        this.loading = true;
        this.service
            .remove(id)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Position[]) => {
                this.setList(data);
            });
    }

    public create(item: Position): void {
        this.loading = true;
        this.service
            .create(item)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Position[]) => {
                this.setList(data);
            });
    }

    public edit(item: Position): void {
        this.loading = true;
        this.service
            .edit(item)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Position[]) => {
                this.setList(data);
            });
    }

    public setModalDialogForRemoving(item: Position): void {
        this.remove = true;
        this.message = item.position;
        this.status = new Status(item.id.toString());
    }
}
