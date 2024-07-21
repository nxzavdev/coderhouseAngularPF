import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { generateId } from '../../../shared/utils';
import { Course } from './models';

const COURSE_DATA: Course[] = [
  { id: 'CO0001', name: 'HTML5', startDate: new Date(), endDate: new Date() },
  { id: 'CO0002', name: 'CSS', startDate: new Date(), endDate: new Date() },
  { id: 'CO0003', name: 'JavaScript', startDate: new Date(), endDate: new Date() },
  { id: 'CO0004', name: 'Node', startDate: new Date(), endDate: new Date() },
  { id: 'CO0005', name: 'SQL', startDate: new Date(), endDate: new Date() },
  { id: 'CO0006', name: 'React', startDate: new Date(), endDate: new Date() },
  { id: 'CO0007', name: 'Angular', startDate: new Date(), endDate: new Date() },
  { id: 'CO0008', name: 'Vue', startDate: new Date(), endDate: new Date() },
  { id: 'CO0009', name: 'Svelte', startDate: new Date(), endDate: new Date() },
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courseName = '';

  displayedColumns: string[] = [
    'id',
    'name',
    'startDate',
    'endDate',
    'actions',
  ];
  dataSource = COURSE_DATA;

  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog
      .open(CourseDialogComponent)
      .afterClosed()
      .subscribe({
        next: (value) => {
          this.courseName = value.name;
          value['id'] = generateId(5);
          this.dataSource = [...this.dataSource, value];
        },
      });
  }

  editCourse(editedCourse: Course) {
    this.matDialog
      .open(CourseDialogComponent, { data: editedCourse })
      .afterClosed()
      .subscribe({
        next: (value) => {
          if (value) {
            this.dataSource = this.dataSource.map((course) =>
              course.id === editedCourse.id
                ? { ...value, id: editedCourse.id }
                : course
            );
          }
        },
      });
  }

  deleteCouserById(id: string) {
    if (confirm('Delete item?')) {
      this.dataSource = this.dataSource.filter((el) => el.id !== id);
    }
  }
}
