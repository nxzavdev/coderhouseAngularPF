import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { generateStudentId } from '../../../shared/utils';
import { Student } from './models';

const STUDENT_DATA: Student[] = [
  {
    id: 'ST-JOS89',
    firstName: 'Carlos',
    lastName: 'Martinez',
    regDate: new Date(),
    birthDate: new Date(),
  },
  {
    id: 'ST-2JF87',
    firstName: 'Lucia',
    lastName: 'Torres',
    regDate: new Date(),
    birthDate: new Date(),
  },
  {
    id: 'ST-FBF90',
    firstName: 'Javier',
    lastName: 'Perez',
    regDate: new Date(),
    birthDate: new Date(),
  },
  {
    id: 'ST-2K81L',
    firstName: 'Ana',
    lastName: 'Garcia',
    regDate: new Date(),
    birthDate: new Date(),
  },
  {
    id: 'ST-LK352',
    firstName: 'Maria',
    lastName: 'Rodriguez',
    regDate: new Date(),
    birthDate: new Date(),
  },
  {
    id: 'ST-SXFH2',
    firstName: 'Julio',
    lastName: 'Mendoza',
    regDate: new Date(),
    birthDate: new Date(),
  },
  {
    id: 'ST-NB56G',
    firstName: 'Pablo',
    lastName: 'Vazquez',
    regDate: new Date(),
    birthDate: new Date(),
  },
  {
    id: 'ST-4GH43',
    firstName: 'Elena',
    lastName: 'Garcia',
    regDate: new Date(),
    birthDate: new Date(),
  },
  {
    id: 'ST-09HS2',
    firstName: 'Laura',
    lastName: 'Hernandez',
    regDate: new Date(),
    birthDate: new Date(),
  },
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  displayedColumns: string[] = [
    'id',
    'fullName',
    'birthDate',
    'regDate',
    'actions',
  ];

  dataSource = STUDENT_DATA;

  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog
      .open(StudentDialogComponent)
      .afterClosed()
      .subscribe({
        next: (value) => {
          value['id'] = generateStudentId(5);
          value['regDate'] = new Date();
          this.dataSource = [...this.dataSource, value];
        },
      });
  }

  editStudent(editedStudent: Student) {
    this.matDialog
      .open(StudentDialogComponent, { data: editedStudent })
      .afterClosed()
      .subscribe({
        next: (value) => {
          if (!!value) {
            this.dataSource = this.dataSource.map((student) =>
              student.id === editedStudent.id
                ? { ...value, id: editedStudent.id, regDate: editedStudent.regDate }
                : student
            );
          }
        },
      });
  }

  deleteStudentById(id: string) {
    if (confirm('Delete student?')) {
      this.dataSource = this.dataSource.filter((el) => el.id !== id);
    }
  }
}
