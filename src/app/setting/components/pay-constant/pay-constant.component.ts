import { Component, OnInit } from '@angular/core';
import { PayConstantService } from './pay-constant.service';
import { Status } from '../../models/status.model';
import { Pay } from './pay.model';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-pay-constant',
    templateUrl: './pay-constant.component.html',
    styleUrls: ['./pay-constant.component.scss']
})
export class PayConstantComponent implements OnInit {
    public loading = false;
    public display = false;
    public message = '';
    public status = new Status<Pay>();
    public list: string[] = [];
    constructor(private service: PayConstantService) {}

    ngOnInit() {
        this.get();
    }

    public get(): void {
        this.loading = true;
        this.service
            .get()
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Pay) => {
                this.setList(data.pay);
            });
    }

    public setModalDialogForEditing(item: Pay): void {
        this.status = new Status<Pay>('123', item);
        this.display = true;
    }

    public setList(list: string): void {
        this.list = [];
        this.list.push(list);
    }

    public edit(item: number): void {
        this.loading = true;
        this.service
            .edit(item)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((data: Pay) => {
                this.setList(data.pay);
            });
    }
}
