import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../features/dashboard/students/models';

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(value: Student, ...args: unknown[]): unknown {
    return `${value?.firstName} ${value?.lastName}`;
  }
}
