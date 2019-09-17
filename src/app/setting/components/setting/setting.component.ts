import { SettingBaseService } from './../../services/setting-base.service';
import { Status } from '../../models/status.model';
import { Component, OnInit } from '@angular/core';
// import { RankService } from '../rank/rank.service';
import { finalize, map } from 'rxjs/operators';

@Component({
    selector: 'app-setting',
    template: '',
    styles: ['']
})
export class SettingComponent<T> implements OnInit {
    public display = false;
    public loading = false;
    public status = new Status<T>();
    public remove = false;
    public message = '';
    public list: T[] = [];
    public path: string = '';
    constructor( private service: SettingBaseService<T>) {}

    ngOnInit() {
        this.service.setUrl(this.path);
        this.get();
    }

    protected setModalDialogForCreation(id: string): void {
        this.display = true;
        this.status = new Status(id, null);
    }

    protected setModalDialogForEditing(item: any): void {
        this.status = new Status(item.id.toString(), item);
        this.display = true;
    }

    protected setModalDialogForRemoving(item: any): void {
        this.remove = true;
        this.message = item.label;
        this.status = new Status(item.id.toString());
        console.log(this.status, this.remove)
    }

    protected setList(list: T[]): void {
        this.list = list;
        console.log(list);
    }

    protected get(): void {
        this.loading = true;
        this.service
            .get()
            .pipe(
                map((data: any[]) => this.setList(data)),
                finalize(() => (this.loading = false)))
            .subscribe();
    }

    protected delete(id: number): void {
        this.loading = true;
        this.service
            .remove(id)
            .pipe(
                map((data: any[]) => this.setList(data)),
                finalize(() => (this.loading = false)))
            .subscribe();
    }

    protected create(item: any): void {
        this.loading = true;
        this.service
            .create(item)
            .pipe(
                map((data: any[]) => this.setList(data)),
                finalize(() => (this.loading = false)))
            .subscribe();
    }

    protected edit(item: any): void {
        this.loading = true;
        this.service
            .edit(item)
            .pipe(
                map((data: any[]) => this.setList(data)),
                finalize(() => (this.loading = false)))
            .subscribe();
    }

}
