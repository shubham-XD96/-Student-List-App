import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>👤 Student Details</h2>
    <p><strong>Name:</strong> {{ student.name }}</p>
    <p><strong>Age:</strong> {{ student.age }}</p>
  `,
  styles: [`
    h2 { color: navy; }
    p { font-size: 16px; }
  `]
})
export class StudentDetailComponent {
  @Input() student: any;
}
