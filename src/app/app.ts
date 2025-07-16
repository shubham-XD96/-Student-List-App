import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './Components/student-list/student-list';
import { StudentDetailComponent } from './Components/student-detail/student-detail';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StudentListComponent, StudentDetailComponent],
  template: `
    <h1>🎓 Student Management</h1>
    
    <app-student-list 
      [students]="students" 
      (studentSelected)="onStudentSelected($event)">
    </app-student-list>

    <app-student-detail 
      *ngIf="selectedStudent" 
      [student]="selectedStudent">
    </app-student-detail>
  `,
  styles: [`
    h1 { color: darkgreen; font-family: Arial; }
  `]
})
export class AppComponent {
  students = [
    { name: 'Amit', age: 21 },
    { name: 'Sneha', age: 22 },
    { name: 'Ravi', age: 23 }
  ];

  selectedStudent: any = null;

  onStudentSelected(student: any) {
    this.selectedStudent = student;
  }
}
