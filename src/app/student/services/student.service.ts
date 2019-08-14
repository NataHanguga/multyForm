import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class StudentService {
	public teacherForm: FormGroup = this.fb.group({
		name: [ '', Validators.compose([Validators.required]) ],
		students: this.fb.array([ this.initialSubject() ])
	});
	constructor(private fb: FormBuilder) {}

	initialSubject(): FormGroup {
		return this.fb.group({
			fullName: [
				'',
			 	Validators.compose([
					Validators.required,
					Validators.minLength(2)
				]) ],
			classNumber: [
				'',
				Validators.compose([
					Validators.required,
					Validators.min(1),
					Validators.max(9)])
				],
			studentType: [ '',  Validators.compose([Validators.required]) ],
			startDate: [ '',  Validators.compose([Validators.required]) ],
			pay: [0]
		});
	}

}
