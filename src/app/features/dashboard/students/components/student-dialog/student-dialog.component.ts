import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../models';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrl: './student-dialog.component.scss',
})
export class StudentDialogComponent {
  studentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editedStudent?: Student
  ) {
    this.studentForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      birthDate: [null, Validators.required],
    });

    if (this.editedStudent) {
      this.studentForm.patchValue(this.editedStudent);
    }
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      this.matDialogRef.close(this.studentForm.value);
    }
  }
}
