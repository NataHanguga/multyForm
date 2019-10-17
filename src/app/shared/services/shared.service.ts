import { Injectable } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class SharedService {
    constructor(
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
    ) { }

    public addSuccessMessage(text: string, summary: string = 'Success'): void {
        this.messageService.add({
            key: 'tc',
            severity: 'success',
            summary,
            detail: text,
        });
    }

    public addWarningMessage(text: string, summary: string = 'Warning'): void {
        this.messageService.add({
            severity: 'warn',
            key: 'tc',
            summary,
            detail: text,
        });
    }

    public addInfoMessage(text: string, summary: string = 'Info'): void {
        this.messageService.add({
            severity: 'info',
            key: 'tc',
            summary,
            detail: text,
        });
    }

    public addErrorMessage(text: string, summary: string = 'Error'): void {
        this.messageService.add({
            severity: 'error',
            key: 'tc',
            summary,
            detail: text,
        });
    }

    public addConfirmationModal(
        message: string,
        header: string,
        acceptCb: Function,
        rejectCb: Function = () => null,
    ): void {
        this.confirmationService.confirm({
            message,
            key: 'tc',
            header,
            accept: acceptCb,
            reject: rejectCb,
            icon: 'pi pi-exclamation-triangle'
        });
    }
}
