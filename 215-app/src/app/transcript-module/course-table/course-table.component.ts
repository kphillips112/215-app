import { Component } from '@angular/core';
import { Course, Semester } from './course-table';
import { NgFor } from '@angular/common';
import { GpaFormComponent } from "../gpa-form/gpa-form.component";

@Component({
    selector: 'app-course-table',
    standalone: true,
    templateUrl: './course-table.component.html',
    styleUrl: './course-table.component.css',
    imports: [NgFor, GpaFormComponent]
})
export class CourseTableComponent {
  
    courseArray:Course[] = [
      {code: 'ART 323', name: 'Brand Identity Design', letterGrade: 'A', gradePoint: 4.0, creditHours: 3, type: 'major'},
      {code: 'ART 325', name: 'User Experience Design', letterGrade: 'A', gradePoint: 4.0, creditHours: 3, type: 'major'},
      {code: 'ART 333', name: 'Contemporary Art History', letterGrade: 'A', gradePoint: 4.0, creditHours: 3, type: 'major'},
      {code: 'CTI 405', name: 'Literature for Children', letterGrade: 'A', gradePoint: 4.0, creditHours: 3, type: 'core'},
      {code: 'COM 215', name: 'Introduction to Web Development', letterGrade: 'B', gradePoint: 3.0, creditHours: 3, type: 'elective'},
    ];

    onCourseAdded(course: Course) {
      console.log('course added');
      this.courseArray.push(course);
    }
    
}