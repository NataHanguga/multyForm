import { SettingService } from 'src/app/setting/services/setting.service';
import { Component, OnInit } from '@angular/core';
import { Education } from './education.model';
import { finalize } from 'rxjs/operators';
import { Status } from '../../models/status.model';

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
    constructor(private settingService: SettingService) { }

    ngOnInit() {
        this.getEducation();
    }

    private getEducation(): void {
        this.loading = true;

        this.settingService.getEducationList()
            .pipe(
                finalize(() => (this.loading = false))
            ).subscribe((data: Education[]) => {
                this.educationList = data;
            });
    }

    public setModalDialogForCreation(id: string): void {
        this.status = new Status<Education>(id, null);
        this.display = true;
    }

    public setModalDialogForEditing(edu: Education): void {
        this.status = new Status<Education>(edu.id.toString(), edu);
        this.display = true;
    }

    public setList(list: Education[]): void {
        this.educationList = list;
    }

    public removeEducation(id: number): void {
        this.loading = true;
        this.settingService.removeEducation(id)
            .pipe(
                finalize(() => (this.loading = false))
            ).subscribe((data: Education[]) => {
                this.setList(data);
            });
    }

    public createEducation(edu: Education): void {
        this.loading = true;
        this.settingService.createEducation(edu)
            .pipe(
                finalize(() => (this.loading = false))
            ).subscribe((data: Education[]) => {
                this.setList(data);
            });
    }

    public editEducation(edu: Education): void {
        this.loading = true;
        this.settingService.editEducation(edu)
            .pipe(
                finalize(() => (this.loading = false))
            ).subscribe((data: Education[]) => {
                this.setList(data);
            });
    }

}
