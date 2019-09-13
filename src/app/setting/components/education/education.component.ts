import { SettingService } from 'src/app/setting/services/setting.service';
import { Component, OnInit } from '@angular/core';
import { Education } from './education.model';
import { finalize } from 'rxjs/operators';
import { Status } from '../teacher-categories/status.model';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
    public educationList: Education[] = [];
    public loading = false;
    public display = false;
    public status = new Status<Education>();
    constructor(private settingSrvice: SettingService) { }

    ngOnInit() {
        this.getEducation();
    }

    private getEducation(): void {
        this.loading = true;

        this.settingSrvice.getEducationList()
            .pipe(
                finalize(() => (this.loading = false))
            ).subscribe((data: Education[]) => {
                console.log(data);
                this.educationList = data;
            });
    }

    public setModalDialogForCreation(id: string): void {
        console.log(id);
        this.status = new Status<Education>(id, null);
        this.display = true;
    }

    public setModalDialogForEditing(edu: Education): void {
        console.log(edu);
        this.status = new Status<Education>(edu.id.toString(), edu);
        this.display = true;
    }

    public setList(list: Education[]): void {
        console.log(list);
        this.educationList = list;
    }

    public dd(event) {
        console.log(event);
    }

    public removeEducation(id: number): void {
        this.settingSrvice.removeEducation(id)
            .pipe(
                finalize(() => (this.loading = false))
            ).subscribe((data: Education[]) => {
                console.log(data);
                this.educationList = data;
            });
    }

}
