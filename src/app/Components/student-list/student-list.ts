import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>📋 Student List</h2>
    <ul>
      <li *ngFor="let student of students">
        {{ student.name }}
        <button (click)="selectStudent(student)">View Details</button>
      </li>
    </ul>
  `,
  styles: [`
    ul { list-style: none; padding: 0; }
    li { margin-bottom: 8px; }
    button { margin-left: 10px; }
  `]
})
export class StudentListComponent {
  @Input() students: any[] = [];
  @Output() studentSelected = new EventEmitter<any>();

  selectStudent(student: any) {
    this.studentSelected.emit(student);
  }
}
